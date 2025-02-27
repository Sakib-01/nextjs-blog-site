// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
// import { NextResponse } from "next/server";
// // import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; // Use edge runtime for Vercel

// export async function middleware(req) {
//   // const { isAuthenticated } = getKindeServerSession();
//   const { getUser } = getKindeServerSession();
//   const { isAuthenticated } = getKindeServerSession();
//   const isUserAuthenticated = await isAuthenticated();

//   if (!isUserAuthenticated) {
//     return NextResponse.redirect(new URL("/api/auth/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/profile", // Protects all routes under /profile
// };

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  // const user = "true";

  if (!isUserAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
