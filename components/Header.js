import React from "react";
import Link from "next/link";
import { headers } from "next/headers";

const Header = () => {
  const isActiveLink = (path) => {
    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");
    return activePath === path;
  };

  return (
    <header className="flex items-center justify-between bg-[#2FBEAB] py-2 px-8 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="flex items-center">
        <img
          src="/images/fraud_analysis_website_favicon_white.png"
          alt="Logo"
          className="h-20"
        />
        <h1 className="ml-4 text-white text-2xl font-bold">Fraud Analysis</h1>
      </div>
      <div className="flex items-center mt-auto">
        <Link
          href="/"
          style={{
            // Use the style prop to set styles directly
            color: isActiveLink("/") ? "#2FBEAB":"white",
            backgroundColor: isActiveLink("/") ? "white":"",
            borderRadius: "0.7rem",
            padding: "0.5rem 1rem",
          }}
          className="text-white mx-4 font-medium text-xl font-bold hover:border-white"
        >
          Home
        </Link>
        <Link
          href="/insights"
          style={{
            // Use the style prop to set styles directly
            color: isActiveLink("/insights") ? "#2FBEAB":"white",
            backgroundColor: isActiveLink("/insights") ? "white":"",
            borderRadius: "0.7rem",
            padding: "0.5rem 1rem",
            
          }}
          className="text-white mx-4 font-medium text-xl font-bold hover:border-white"
        >
          Insights
        </Link>
       
      </div>
    </header>
  );
};

export default Header;
