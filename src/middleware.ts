// middleware.ts
import createMiddleware from "next-intl/middleware";

// Define your routing configuration
const routing = {
  defaultLocale: "en",
  locales: ["en"],
  localePrefix: "never" as const, // Remove locale prefix for English
};

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except certain patterns
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
