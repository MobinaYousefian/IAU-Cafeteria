import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import ColoredLogo from "@/logo/colored-logo";
import lauLogo from "@/assest/logo/amozeshyar-logo.png";

import styles from "./my-header-sf.module.css";

export default function MyHeaderSfComponent(): ReactElement {
  return (
    <header className={styles["my-header-sf"]}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <ColoredLogo />
        </Link>
      </div>
      <div className={styles.logotype}>منوی سلف - دانشگاه آزاد لاهیجان</div>
      <div className={styles["lau-logo"]}>
        <Image src={lauLogo} alt={"logo"} priority />
      </div>
    </header>
  );
}
