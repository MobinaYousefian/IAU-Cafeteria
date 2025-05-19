import { ReactElement } from "react";
import Image from "next/image";

import MyPriceSfComponent from "@/components/my-price-sf/my-price-sf.component";
import MyStudentPriceSfComponent from "@/components/my-student-price-sf/my-student-price-sf.component";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import sold from "@/assest/no-stock-w.png";

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
      {item.stats === "sold" && (
        <div className={styles.sold}>
          <Image src={sold} alt={"sold out"} />
        </div>
      )}
      <div className={styles.writings}>
        <div className={styles.name}>{item.label}</div>
        <p className={styles.ingredients}>
          {item.ingredients.map((str, index) =>
            index < item.ingredients.length - 1 ? str + "، " : str,
          )}
        </p>
        <MyPriceSfComponent price={item.price} />
        {item.studentPrice && (
          <MyStudentPriceSfComponent studentPrice={item.studentPrice} />
        )}
      </div>
    </div>
  );
}
