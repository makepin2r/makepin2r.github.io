import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Invalid image URL" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    if (!contentType?.startsWith("image/")) {
      return NextResponse.json(
        { error: "Invalid image type" },
        { status: 400 },
      );
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}
