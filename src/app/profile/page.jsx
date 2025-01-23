import React from "react";
// import { redirect } from "next/navigation";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  // const { getUser, isAuthenticated } = getKindeServerSession();

  // const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) {
  //   redirect("/api/auth/login");
  // }
  // console.log(getUser);
  // const user = await getUser();
  return (
    <div>
      <h2 className="text-3xl">
        Welcome to your profile{" "}
        {/* <span>
          Mr {user?.given_name} {user?.family_name}
        </span> */}
      </h2>
    </div>
  );
};

export default ProfilePage;
