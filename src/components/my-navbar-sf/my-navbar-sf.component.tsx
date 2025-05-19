"use client";
import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import { MY_NAVBAR_DATA_SF } from "@/lib/header/navbar-data";

import styles from "./my-navbar-sf.module.css";

export default function MyNavbarSfComponent(): ReactElement {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = MY_NAVBAR_DATA_SF.map(({ url }) => url);

  useEffect(() => {
    const myListenScrollSf = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", myListenScrollSf);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        threshold: 0.2,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", myListenScrollSf);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={clsx(styles["my-navbar-sf"], scrolling && styles.scrolled)}>
      {MY_NAVBAR_DATA_SF.map(({ url, label, icon }) => (
        <Link href={"#" + url} key={url}>
          <div
            className={clsx(
              styles.container,
              activeSection === url && styles.active,
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
