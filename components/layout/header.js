import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-6 sticky top-0 bg-white border-b z-50 ">
      <div>Logo</div>
      <nav className="flex space-x-2 justify-around gap-8">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/categories"> Categories</Link>
        <Link href="/about">About</Link>
      </nav>
      <Button>SignIn</Button>
    </header>
  );
};

export default Header;
