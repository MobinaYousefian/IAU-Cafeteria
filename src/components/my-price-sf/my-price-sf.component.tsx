import { ReactElement } from "react";

import clsx from "clsx";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import styles from "./my-price-sf.module.css";

type Props = {
  price: MyFoodDataSf["price"];
  discountPercent: MyFoodDataSf["discountPercent"];
};

export default function MyPriceSfComponent({
  price,
  discountPercent,
}: Props): ReactElement {
  const discountPrice = (price * (100 - discountPercent!)) / 100;

  return (
    <div className={styles["my-price-sf"]}>
      <div className={clsx(styles.value, discountPercent && styles.crossed)}>
        <div className={styles.number}>{price}</div>
        <div className={styles.currency}>
          <div>هـــزار</div>
          <div>تومان</div>
        </div>
      </div>
      {discountPercent && (
        <div className={clsx(styles.value, styles.discount)}>
          <div className={styles.number}>{discountPrice}</div>
          <div className={styles.currency}>
            <div>هـــزار</div>
            <div>تومان</div>
          </div>
        </div>
      )}
    </div>
  );
}
