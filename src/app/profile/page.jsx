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

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
    return null;
  }

  const user = await getUser();

  return (
    <section className="w-10/12 mx-auto min-h-screen">
      <p className="text-3xl font-semibold">
        Welcome to your profile {user?.given_name} {user?.family_name}
      </p>
    </section>
  );
}
