import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="container mx-auto my-10">
      <div>
        <ul className="flex gap-6 ">
          <li>
            <Link href={"/"}>Home </Link>
          </li>

          {/* <li>
            <Link href={"/blogs"}>Blogs </Link>
          </li> */}
          <li>
            <Link href={"/profile"}>Profile </Link>
          </li>
          {user ? (
            <>
              <h2>{user?.given_name}</h2>
              <li>
                <Link href={"/api/auth/logout"}>logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/api/auth/login"}>login </Link>
              </li>
              <li>
                <Link href={"/api/auth/register"}>Signup </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
