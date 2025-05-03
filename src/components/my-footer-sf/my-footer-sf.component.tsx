import { ReactElement } from "react";

import styles from "./my-footer-sf.module.css";
import Link from "next/link";

export default function MyFooterSfComponent(): ReactElement {
  return (
    <footer className={styles["my-footer-sf"]}>
      <div className={styles.links}>
        <div>نصب منو</div>
      </div>
      <div className={styles.copyright}>
        Developed By{" "}
        <Link href={"https://www.linkedin.com/in/mobina-yousefian"}>Mysf</Link>
        ⌨️
      </div>
    </footer>
  );
}
