"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RoutingLink({
    children,
    href,
    scroll,
    className,
    activeClass,
    ...restProps
}: {
  children: React.ReactNode;
  href: string;
  scroll?: boolean;
  className?: string;
  activeClass?: string;
  onClick?: (event: any) => void;
}) {
    const currentLocale = useLocale();
    const pathname = usePathname();

    // Check if the link is active based on the current pathname
    const isLinkActive = `/${currentLocale}/${href}` === pathname;

    function handleActiveClass() {
        if (isLinkActive) {
            if (activeClass) {
                return activeClass;
            } else {
                return "text-primaryHover";
            }
        } else {
            return "";
        }
    }

    return (
        <Link
            href={`/${currentLocale}/${href}`}
            passHref
            scroll={scroll ? scroll : true}
            className={`${className ? className : ""} ${handleActiveClass()}`}
            {...restProps}
        >
            {children}
        </Link>
    );
}
