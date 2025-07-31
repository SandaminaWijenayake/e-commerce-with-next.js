import { NextResponse } from "next/server";
import { getHeroImages } from "@/lib/mongodb";

export async function GET() {
  try {
    const products = await getHeroImages();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.error();
  }
}
