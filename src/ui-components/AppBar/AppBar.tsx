"use client"
import React, { useEffect, useState } from "react";
import LogoSection from "./logo-section/LogoSection";
import NavigationBar from "./navigation-bar/NavigationBar";
import UserIcon from "./user-section/UserIcon";
import Notification from "./notification/Notification";

const AppBar = () => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-2 bg-white  fixed top-0 left-0 right-0">
      <div
        className={`flex flex-row items-center justify-between px-10 py-4 bg-white z-10 ${shadow ? "shadow-sticky-shadow" : ""
          }`}
      >
        <LogoSection />
        <NavigationBar />
        <div className="flex items-center gap-4">

        {/* <Notification /> */}
        <UserIcon />
        </div>
      </div>
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas cupiditate itaque sint iusto dignissimos illum qui neque odio eligendi obcaecati laborum eum nostrum perferendis numquam, sed aperiam. Aliquid, cumque.
      </div> */}
     
    </div>
  );
};

export default AppBar;
