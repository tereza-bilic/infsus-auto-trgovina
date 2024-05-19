import { NextRequest, NextResponse } from "next/server";

// Model
import favorit from "@/models/Favoriti";

// Types
import { ParamsWithId } from "@/@types/api";

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  const response = favorit
    .get(params.id)
    .then((data) => {
      return NextResponse.json(data.rows[0], { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ success: false }, { status: 500 });
    });

  return response;
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  const response = favorit
    .remove(params.id)
    .then(() => {
      return NextResponse.json({ success: true }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ success: false }, { status: 500 });
    });

  return response;
}
