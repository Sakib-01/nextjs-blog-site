import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; // Ensure this path is correct
import { NextResponse } from "next/server";

export default async function middleware(req) {
  // Get the user's session
  const { isAuthenticated } = await getKindeServerSession(req);

  // Debugging (optional)
  console.log("Middleware executed");
  console.log("isAuthenticated:", isAuthenticated);

  // If the user is not authenticated and tries to access the `/profile` route
  if (!isAuthenticated && req.nextUrl.pathname === "/profile") {
    // Redirect to the login page
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  // If authenticated, allow the request to proceed
  return NextResponse.next();
}

// Config for middleware to match specific routes
export const config = {
  matcher: ["/profile"], // Only run this middleware for `/profile`
};
