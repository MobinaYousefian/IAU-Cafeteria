import { ReactElement } from "react";

import MyFoodSectionSfComponent from "@/components/my-food-section-sf/my-food-section-sf.component";

import { MY_FOOD_DATA_SF } from "@/lib/food/food-data";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      {MY_FOOD_DATA_SF.map(({ id, label, menu }) => (
        <MyFoodSectionSfComponent key={id} id={id} label={label} menu={menu} />
      ))}
    </div>
  );
}
