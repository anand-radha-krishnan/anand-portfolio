import { NextRequest, NextResponse } from "next/server";
import clientProjects from "@/static/client-projects.json";
import personalProjects from "@/static/personal-projects.json";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const projectType = (await params).type;

  if (projectType === "client")
    return NextResponse.json({ projects: clientProjects });
  if (projectType === "personal")
    return NextResponse.json({ projects: personalProjects });
}
