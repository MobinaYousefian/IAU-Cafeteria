import { ReactElement } from "react";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import styles from "./my-price-sf.module.css";

type Props = {
  price: MyFoodDataSf["price"];
};

export default function MyPriceSfComponent({ price }: Props): ReactElement {
  return (
    <div className={styles["my-price-sf"]}>
      <div className={styles.number}>{price}</div>
      <div className={styles.currency}>
        <div>هـــزار</div>
        <div>تومان</div>
      </div>
    </div>
  );
}
