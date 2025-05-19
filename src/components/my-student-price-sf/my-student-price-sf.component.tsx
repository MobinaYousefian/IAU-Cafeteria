import { ReactElement } from "react";
import Image from "next/image";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import lauLogo from "@/assest/logo/amozeshyar-logo.png";

import styles from "./my-student-price-sf.module.css";

type Props = {
  studentPrice: MyFoodDataSf["studentPrice"];
};

export default function MyStudentPriceSfComponent({
  studentPrice,
}: Props): ReactElement {
  return (
    <div className={styles["my-student-price-sf"]}>
      <Image src={lauLogo} alt={"logo"} priority />
      <span>قیمت دانشجویی:</span>
      <span className={styles.number}>
        {Number(studentPrice + "000").toLocaleString()}
      </span>
      <span>تومان</span>
    </div>
  );
}
