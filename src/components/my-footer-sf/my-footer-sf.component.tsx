import { ReactElement } from "react";
import Link from "next/link";

import { MY_FOOTER_DATA_SF } from "@/lib/footer/footer-data";

import styles from "./my-footer-sf.module.css";

export default function MyFooterSfComponent(): ReactElement {
  const supportNumbers = MY_FOOTER_DATA_SF.supportNumbers;

  return (
    <footer className={styles["my-footer-sf"]}>
      <div className={styles.links}>
        <div>
          <span>تماس با پشتیبانی: </span>
          {supportNumbers.map((num, index) => (
            <span dir={"ltr"} key={num}>
              {index === supportNumbers.length - 1 ? num : " | " + num}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        Developed By{" "}
        <Link href={"https://www.linkedin.com/in/mobina-yousefian"}>Mysf</Link>
        ⌨️
      </div>
    </footer>
  );
}
