import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/project";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const project_type = (await params).type;
  await dbConnect();

  const projects = await Project.find({ project_type });
  return NextResponse.json({ projects });
}
