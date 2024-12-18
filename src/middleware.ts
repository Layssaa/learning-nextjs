import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/platform"];
const publicRoutes = ["/login", "/register"];

const disableMiddleware = true;

export function middleware(request: NextRequest) {
  if (disableMiddleware) {
    return NextResponse.next();
  }

  // URL ACESSED
  const { pathname } = request.nextUrl;
  // USER SESSION
  const userId = request.cookies.get("user-id");

  // FUNCTION TO VERIFY IF IS A PROTECTED ROUTER
  const isPrivateRouter = protectedRoutes.some((path: string) =>
    pathname.startsWith(path)
  );

  if (isPrivateRouter && userId) {
    return NextResponse.next();
  }

  if (isPrivateRouter && !userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // FUNCTION TO VERIFY IF IS A PUBLIC ROUTER
  const isPublicRouter = publicRoutes.some((path: string) =>
    pathname.startsWith(path)
  );

  if (isPublicRouter && !userId) {
    return NextResponse.next();
  }

  if (isPublicRouter && userId) {
    return NextResponse.redirect(new URL("/platform", request.url));
  }

  // REDIRECT TO LOGIN IF URL IS INVALID
  return NextResponse.redirect(new URL("/login", request.url));
}
