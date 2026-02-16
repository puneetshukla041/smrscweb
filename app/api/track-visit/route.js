import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://puneetshukla041_db_user:mctFVVhcaWQiJclf@cluster0.gdowgbv.mongodb.net/?appName=Cluster0";

// 1. Upgraded Schema to hold EVERYTHING
const visitSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 1 },
  lastVisited: { type: Date, default: Date.now },
  
  // Analytics Data
  deviceType: String, // Desktop or Mobile
  browser: String,
  os: String,
  country: String,
  region: String,
  city: String,
  screenResolution: String,
  totalWatchTime: { type: Number, default: 0 } // Total seconds spent on site
});

const Visit = mongoose.models.Visit || mongoose.model('Visit', visitSchema);

export async function POST(req) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }

    const body = await req.json().catch(() => ({})); // Parse incoming body safely
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown-ip';
    
    // -- SCENARIO A: User is leaving the page (Updating Watch Time) --
    if (body.action === 'leave' && body.watchTime) {
      await Visit.findOneAndUpdate(
        { ip: ip },
        { $inc: { totalWatchTime: body.watchTime } }
      );
      return NextResponse.json({ success: true, message: "Watch time updated" });
    }

    // -- SCENARIO B: User just landed on the page (Initial Tracking) --
    if (ip === 'unknown-ip') {
      return NextResponse.json({ message: "Could not determine IP" }, { status: 400 });
    }

    // Parse User-Agent for Device Info
    const userAgent = req.headers.get('user-agent') || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop';
    
    // Basic Browser/OS sniffing (You can expand this)
    let browser = "Unknown";
    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Safari")) browser = "Safari";
    else if (userAgent.includes("Firefox")) browser = "Firefox";

    let os = "Unknown";
    if (userAgent.includes("Win")) os = "Windows";
    else if (userAgent.includes("Mac")) os = "MacOS";
    else if (userAgent.includes("Android")) os = "Android";
    else if (userAgent.includes("like Mac")) os = "iOS";

    // Get Geolocation from free IP-API (Skip if localhost)
    let geoData = { country: "Unknown", regionName: "Unknown", city: "Unknown" };
    if (ip !== '::1' && ip !== '127.0.0.1') {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        geoData = await geoRes.json();
      } catch (err) {
        console.log("Geo fetch failed");
      }
    }

    // Update or Insert the comprehensive data
    await Visit.findOneAndUpdate(
      { ip: ip }, 
      { 
        $set: { 
          lastVisited: new Date(),
          deviceType,
          browser,
          os,
          country: geoData.country,
          region: geoData.regionName,
          city: geoData.city,
          screenResolution: body.screenResolution || "Unknown"
        },
        $inc: { visitCount: 1 }
      }, 
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Failed to track visit" }, { status: 500 });
  }
}