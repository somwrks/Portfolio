// app/api/fetchStories/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Add your data fetching logic here
    return NextResponse.json({ stories: [] });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
  }
}
