import { NextResponse } from "next/server";
import { getAllPostSlugs } from "@/lib/mdx";

export async function GET() {
  const slugs = await getAllPostSlugs();
  return NextResponse.json({ slugs });
}
