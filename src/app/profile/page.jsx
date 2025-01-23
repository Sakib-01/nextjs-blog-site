import React from "react";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  // Check if the user is authenticated
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
    return null; // Prevent further rendering
  }

  // Fetch the user details
  const user = await getUser();

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Welcome to your profile!</h2>
      <p className="text-xl">
        Name:{" "}
        <strong>
          {user?.given_name} {user?.family_name}
        </strong>
      </p>
      <p className="text-xl">
        Email: <strong>{user?.email}</strong>
      </p>
    </div>
  );
};

export default ProfilePage;
