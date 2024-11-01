import Icons from "./icons";
import React from "react";

export default function Footer(){
  return (
    <footer className=" py-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-rows-auto grid-cols-1 justify-items-center gap-4">
          <ul className="grid grid-cols-3 gap-6">
          <Icons/>
          </ul>
          <p className="text-sm">&copy; 2024 Nikita Lobanov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

