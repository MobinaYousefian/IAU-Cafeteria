"use client";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { MY_NAVBAR_DATA_SF } from "@/lib/header/navbar-data";

import styles from "./my-navbar-sf.module.css";

export default function MyNavbarSfComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <nav className={styles["my-navbar-sf"]}>
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
