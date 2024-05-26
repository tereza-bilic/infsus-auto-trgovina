import { NextRequest, NextResponse } from "next/server";

// Model
import favorit from "@/models/Favoriti";

export async function GET(request: NextRequest) {
  const response = favorit
    .getAll()
    .then((data) => {
      return NextResponse.json(data.rows, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ success: false }, { status: 500 });
    });

  return response;
}

export async function POST(request: NextRequest) {
  const res = await request.json();

  const response = favorit
    .add(res)
    .then(() => {
      return NextResponse.json({ success: true }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ success: false }, { status: 500 });
    });

  return response;
}