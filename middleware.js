import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware(req) {
  const { isAuthenticated } = await getKindeServerSession(req);

  if (!isAuthenticated && req.nextUrl.pathname === "/profile") {
    return Response.redirect(new URL("/api/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/profile"],
};
