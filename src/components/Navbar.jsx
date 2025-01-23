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
        <Link href={"/"}>Blog</Link>
      </li>
      <li>
        {" "}
        <Link href={"/profile"}>Profile</Link>{" "}
      </li>
      {isUserAuthenticated ? (
        <>
          <li>
            <LogoutLink>Log out</LogoutLink>{" "}
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <LoginLink>Login</LoginLink>
          </li>
          <li>
            {" "}
            <RegisterLink>Registerr</RegisterLink>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="container mx-auto my-10">
      <div>
        <ul className="flex gap-6 ">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
