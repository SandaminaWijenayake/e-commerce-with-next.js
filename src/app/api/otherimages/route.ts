import { NextResponse } from "next/server";
import { getOtherImages } from "@/lib/mongodb";

export async function GET() {
  try {
    const products = await getOtherImages();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.error();
  }
}
