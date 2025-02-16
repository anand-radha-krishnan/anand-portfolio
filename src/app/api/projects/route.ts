import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/lib/model";

export async function GET() {
  await dbConnect();

  const projects = await Project.find({});
  return NextResponse.json(projects);
}
