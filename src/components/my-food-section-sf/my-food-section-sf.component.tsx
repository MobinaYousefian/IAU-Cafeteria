import { ReactElement } from "react";

import MyFoodCardSfComponent from "@/components/my-food-card-sf/my-food-card-sf.component";

import { MyFoodDataSf } from "@/lib/food/food-data.type";

import styles from "./my-food-section-sf.module.css";

type Props = {
  id: string;
  label: string;
  menu: MyFoodDataSf[];
};

export default function MyFoodSectionSfComponent({
  id,
  label,
  menu,
  ...otherProps
}: Props): ReactElement {
  return (
    <section
      id={id.toString()}
      className={styles["my-food-section-sf"]}
      {...otherProps}
    >
      <h2 className={styles.heading}>{label}</h2>
      <div className={styles.content}>
        {menu.map((item) => (
          <MyFoodCardSfComponent key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
