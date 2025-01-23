import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { getUser, isAuthenticated } = getKindeServerSession();

  useEffect(() => {
    const fetchUserData = async () => {
      const isUserAuthenticated = await isAuthenticated();
      if (!isUserAuthenticated) {
        redirect("/api/auth/login");
        return;
      }

      const userData = await getUser();
      setUser(userData);
      setLoading(false);
    };

    fetchUserData();
  }, [getUser, isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator
  }

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
