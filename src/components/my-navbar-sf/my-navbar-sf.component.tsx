"use client";
import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { MY_NAVBAR_DATA_SF } from "@/lib/header/navbar-data";

import styles from "./my-navbar-sf.module.css";

export default function MyNavbarSfComponent(): ReactElement {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const myListenScrollSf = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", myListenScrollSf);

    return () => window.removeEventListener("scroll", myListenScrollSf);
  }, []);

  return (
    <nav className={clsx(styles["my-navbar-sf"], scrolling && styles.scrolled)}>
      {MY_NAVBAR_DATA_SF.map(({ url, label, icon }) => (
        <Link href={url} key={url}>
          <div
            className={clsx(
              styles.container,
              pathname === url && styles.active,
            )}
          >
            <div className={styles.menu}>
              <div className={styles.visuals}>
                <Image src={icon} alt={label} />
              </div>
              <div className={styles.tag}>{label}</div>
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
