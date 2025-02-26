import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // International routing
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(it|en)/:path*", "/((?!_next|_vercel|.*\\..*|api).*)"],
};
