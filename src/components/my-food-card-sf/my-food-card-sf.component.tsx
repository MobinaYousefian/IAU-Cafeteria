import { ReactElement } from "react";
import Image from "next/image";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import styles from "./my-food-card-sf.module.css";

type Props = {
  item: MyFoodDataSf;
};

export default function MyFoodCardSfComponent({ item }: Props): ReactElement {
  return (
    <div className={styles["my-food-card-sf"]}>
      <div className={styles.visuals}>
        <Image
          src={item.image}
          alt={item.label}
          priority={
            Number(item.id.slice(1)) >= 11 && Number(item.id.slice(1)) < 15
          }
        />
      </div>
      <div className={styles.writings}>
        <div className={styles.name}>{item.label}</div>
        <p className={styles.ingredients}>
          {item.ingredients.map((str, index) =>
            index < item.ingredients.length - 1 ? str + "، " : str,
          )}
        </p>
        <div className={styles.price}>
          <div className={styles.number}>{item.price}</div>
          <div className={styles.currency}>
            <div>هـــزار</div>
            <div>تومان</div>
          </div>
        </div>
      </div>
    </div>
  );
}
