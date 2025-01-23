import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  // Get the user's session
  const { getUser, isAuthenticated } = await getKindeServerSession();

  const user = await getUser();
  // If the user is not authenticated or the user object is missing, redirect them to the login page
  if (!user) {
    redirect("/api/auth/login");
  }

  // If authenticated, display the user's profile
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold">Welcome to your profile</h2>
      <p className="mt-4 text-lg">
        {user ? (
          <>
            <span>
              Hello, {user?.given_name} {user?.family_name}!
            </span>
          </>
        ) : (
          "User information not available."
        )}
      </p>
    </div>
  );
};

export default ProfilePage;
