// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Link from "next/link";
// import React from "react";

import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  const links = (
    <>
      <li>
        {" "}
        <Link className="border-2 rounded-md  px-3 py-2" href={"/"}>
          Blog
        </Link>
      </li>
      <li>
        {" "}
        <Link className="border-2 rounded-md  px-3 py-2" href={"/profile"}>
          Profile
        </Link>{" "}
      </li>
      {isUserAuthenticated ? (
        <>
          <li>
            <LogoutLink className="border-2 rounded-md  px-3 py-2">
              Log out
            </LogoutLink>{" "}
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <LoginLink className="border-2 rounded-md  px-3 py-2">
              Login
            </LoginLink>
          </li>
          <li>
            {" "}
            <RegisterLink className="border-2 rounded-md  px-3 py-2">
              Registerr
            </RegisterLink>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl ">Next.js-Blog</h2>
        <ul className="flex gap-6 ">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
