"use client";
import AuthContext from "@/contexts/auth.context";
import { IUser } from "@/types/auth.types";
import Link from "next/link";
import React, { useContext } from "react";

const navLinks: { label: string; link: string; id: string }[] = [
  {
    label: "Home",
    link: "/",
    id: "home",
  },
  {
    label: "Products",
    link: "/products",
    id: "products",
  },
  {
    label: "About",
    link: "/about",
    id: "about",
  },
  {
    label: "contact",
    link: "/contact",
    id: "contact",
  },
];

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log("nav bar", user);
  return (
    <nav className="h-16 border border-gray-300 flex items-center justify-between px-20">
      {/* icon */}
      <div>
        <p>Ecommerce</p>
      </div>

      {/* links */}
      <div className="flex items-center gap-2">
        {navLinks.map(({ link, label, id }) => {
          return (
            <Link key={id} href={link}>
              <p>{label}</p>
            </Link>
          );
        })}
      </div>

      {/* auth sections */}
      {!user ? <AuthLinkSection /> : <div>
                <AuthSection user={user} logout={logout} />
            </div>}
      
    </nav>
  );
};

const AuthLinkSection = () => {
  return (
    <div className="flex gap-3">
        <Link href={"/login"}>
          <p className="bg-sky-500 text-white min-w-30 px-1 text-center font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300">
            Login
          </p>
        </Link>
        <Link href={"/register"}>
          <p className="border border-bg-sky-500 text-sky-500 min-w-30 px-1 text-center font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 hover:text-white active:bg-sky-600 transition-all duration-300">
            Sign Up
          </p>
        </Link>
      </div>
  );
};

const AuthSection = ({
  user: { fullName, email, profile_image },
  logout,
}: {
  user: IUser;
  logout: () => void
}) => {
  return (
    <section className="flex items-center gap-2">
      <div className="h-16 w-16 border border-black-500 rounded-full p-0.5 overflow-clip">
        <img
          src={profile_image?.path ?? "/images.jpg"}
          alt="profile image"
          height={500}
          width={500}
        />
      </div>
      <div>
        <p className="text-black-500 font-semibold text-lg">{fullName}</p>
        <p
          onClick={logout}
          className="cursor-pointer text-sm text-red-500 font-semibold">
          Logout
        </p>
      </div>
    </section>
  );
};



export default NavBar;
