import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity";

export async function GET() {
  const query =
    '*[_type == "experience"]|order(order){ _id, timeline, designation, descriptions, organization }';
  const experience = await sanityClient.fetch(query);
  return NextResponse.json(experience);
}
