import { MYSFNavbarData } from "@/lib/header/navbar-data.type";

import mysfEgg from "@/assest/navbar/mysfegg.png";
import mysfSalad from "@/assest/navbar/mysfsalad.png";
import mysfPizza from "@/assest/navbar/mysfpizza.png";
import mysfSandwich from "@/assest/navbar/mysfsandwich.png";
import mysfKebab from "@/assest/navbar/mysfkebab.png";
import mysfCoffee from "@/assest/navbar/mysfcoffee.png";
import mysfTea from "@/assest/navbar/mysftea.png";
import mysfSmoothie from "@/assest/navbar/mysfsmoothie.png";
import mysfHotDrink from "@/assest/navbar/mysfhot-drink.png";
import mysfDonut from "@/assest/navbar/mysfdonut.png";

export const MY_NAVBAR_DATA_SF: MYSFNavbarData[] = [
  {
    url: "breakfast",
    label: "صبحانه",
    icon: mysfEgg,
  },
  {
    url: "salad",
    label: "سالاد",
    icon: mysfSalad,
  },
  {
    url: "pizza",
    label: "پیتزا",
    icon: mysfPizza,
  },
  {
    url: "fastfood",
    label: "فست‌فود",
    icon: mysfSandwich,
  },
  {
    url: "irani",
    label: "ایرانی",
    icon: mysfKebab,
  },
  {
    url: "coffee",
    label: "قهوه",
    icon: mysfCoffee,
  },
  {
    url: "herbal-tea",
    label: "دمنوش",
    icon: mysfTea,
  },
  {
    url: "cold-bar",
    label: "بار سرد",
    icon: mysfSmoothie,
  },
  {
    url: "hot-bar",
    label: "بار گرم",
    icon: mysfHotDrink,
  },
  {
    url: "cake",
    label: "کیک",
    icon: mysfDonut,
  },
];
