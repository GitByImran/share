import React, { useState } from "react";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoNotificationsOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const Notification: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main>
      <Sheet>
        <div className="flex gap-2">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative dark:bg-white dark:text-black"
            >
              <span className={`text-xl`}>
                <IoNotificationsOutline />
              </span>
              <span className="absolute -left-1 -top-3 bg-red-500 text-white h-6 w-6 rounded-full text-sm flex items-center justify-center">
                0
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className={`${
              theme === "dark" ? "text-white bg-black" : "text-black bg-white"
            }`}
          >
            <SheetHeader>
              <SheetTitle
                className={` pb-5 border-b ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Notifications
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 h-screen overflow-auto py-5">
              <SheetClose asChild>
                <Link href="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet, est!
                </Link>
              </SheetClose>

              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
              <Link href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                est!
              </Link>
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </main>
  );
};

export default Notification;
