"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import hamburgerIcon from "@/assets/icons/hamburger.svg";
import dropdonwIcon from "@/assets/icons/dropdown.svg";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { SyntheticEvent, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = (ev: SyntheticEvent) => {
    if (
      isOpen &&
      ev.currentTarget === ev.target &&
      ev.currentTarget.getAttribute("id") === "menu-overlay"
    ) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Admission", href: "/admission" },
    {
      name: "Overview", children: [
        { name: "About us", href: "/about-us" },
        { name: "Our aim", href: "/our-aim" },
        { name: "Our methodology", href: "/our-methodology" },
        { name: "Our usp", href: "/our-usp" },
        { name: "Rules & Regulations", href: "/rules-and-regulations" },
      ]
    },
    { name: "Fees", href: "/fees" },
    { name: "Contact us", href: "/contact-us" }
  ];

  // Animation Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" }
  };

  return (
    <div className={clsx(["MobileNavigation flex items-center"])}>
      {/* Hamburger button */}
      <button id="menu-button" onClickCapture={toggleState}>
        <Image
          src={hamburgerIcon}
          alt="Hamburger Icon for accessing menu"
          width={30}
          height={30}
        />
      </button>

      {/* Overlay */}
      <AnimatePresence >
        {isOpen && (
          <motion.div
            id="menu-overlay"
            className={clsx(["fixed inset-0 bg-black bg-opacity-50",
              "z-50"
            ])}
            onClickCapture={toggleState}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
          >
            {/* Menu Items */}
            <motion.div
              className={clsx([
                "menu-items-wrapper absolute top-0 right-0 bottom-0 w-56 bg-white",
                "flex flex-col items-center",
                "drop-shadow-xl",
              ])}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <div className={clsx(["w-full h-auto py-2", "bg-primary"])}>
                <Logo type="secondary" text1="P C Academy" />
              </div>
              <NavigationMenu.Root
                orientation="vertical"
                className={clsx([
                  "w-full bg-white",
                  "relative",
                  "text-primary"
                ])}
              >
                <NavigationMenu.List className={clsx(["min-w-[240px]"])}>
                  {menuItems.map((item, index) => (
                    <NavigationMenu.Item key={index}>
                      {!item.children ?
                        <Link href={item?.href || "/"}>
                          <NavigationMenu.Trigger className={clsx([
                            "py-3 px-4 uppercase",
                            "w-full text-left"
                          ])}>
                            {item.name}
                          </NavigationMenu.Trigger>
                        </Link>
                        :
                        <>
                          <NavigationMenu.Trigger
                            className={clsx([
                              "py-3 px-4",
                              "uppercase w-full text-left",
                              "flex"
                            ])}
                          >{item.name}
                            <Image src={dropdonwIcon} alt="dropdown icon"
                              className={clsx(["mx-2"])} width={25} height={25} />
                          </NavigationMenu.Trigger>
                          <NavigationMenu.Content>
                            <NavigationMenu.Sub orientation="vertical" className={clsx(["bg-blue-50"])}>
                              {item.children.map((subItem, index) => (
                                <NavigationMenu.Item key={index}>
                                  <Link href={subItem.href}>
                                    <NavigationMenu.Trigger className="py-3 px-7 uppercase w-full text-left">
                                      {subItem.name}
                                    </NavigationMenu.Trigger>
                                  </Link>
                                </NavigationMenu.Item>
                              ))}
                            </NavigationMenu.Sub>
                          </NavigationMenu.Content>
                        </>
                      }
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
