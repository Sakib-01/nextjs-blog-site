// import React from "react";
// import { redirect } from "next/navigation";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// const ProfilePage = async () => {
//   const { getUser, isAuthenticated } = getKindeServerSession();

//   const user = await getUser();

//   const isUserAuthenticated = await isAuthenticated();
//   if (!isUserAuthenticated) {
//     redirect("/api/auth/login");
//   }
//   console.log(getUser);
//   return (
//     <div>
//       <h2 className="text-3xl">
//         <p>Welcome to your profile </p>
//         {/* <span>
//           Mr {user?.given_name} {user?.family_name}
//         </span> */}
//       </h2>
//     </div>
//   );
// };

// export default ProfilePage;

// function app() {
//   return <div>Welcome to your profile</div>;
// }

// export default app;
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export default function Profile() {
//   const { user } = getKindeServerSession();

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
//       {user && <p className="mt-4">Hello, {user.given_name}!</p>}
//     </div>
//   );
// }

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  return (await isAuthenticated()) ? (
    <section className="container mx-auto min-h-screen">
      <p className="text-3xl font-semibold">
        hey {user?.family_name} {user?.given_name}👋
      </p>
    </section>
  ) : (
    <div className="container mx-auto min-h-screen text-2xl">
      This page is protected, please{" "}
      <LoginLink className="font-bold underline">Login</LoginLink> to view it
    </div>
  );
}
