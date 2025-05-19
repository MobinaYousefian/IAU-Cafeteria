import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MyCategorySf = {
  id: string;
  label: string;
  menu: MyFoodDataSf[];
};

export type MyFoodDataSf = {
  id: string;
  image: StaticImport;
  label: string;
  price: number;
  studentPrice?: number;
  ingredients: string[];
  stats: "available" | "sold";
  discountPercent?: number;
};
