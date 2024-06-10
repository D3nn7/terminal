import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    status: 200,
    body: {
      message: "Hello, world!",
    },
  });
}
