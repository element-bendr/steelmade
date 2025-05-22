import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only apply to /admin routes
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  const authHeader = request.headers.get("authorization");
  
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic realm=Admin Access",
        "Content-Type": "application/json",
      },
    });
  }

  // Using TextEncoder/TextDecoder instead of Buffer for Edge Runtime compatibility
  const base64Credentials = authHeader.split(" ")[1];
  // Decode base64 string without using Buffer (Edge Runtime compatible)
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic realm=Admin Access",
        "Content-Type": "application/json",
      },
    });
  }

  // If authorized, continue
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
