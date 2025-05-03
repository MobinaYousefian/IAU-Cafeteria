import { MYSFNavbarData } from "@/lib/header/navbar-data.type";

import mysfEgg from "@/assest/navbar/mysfegg.png";
import mysfSoup from "@/assest/navbar/mysfsoup.png";
import mysfPizza from "@/assest/navbar/mysfpizza.png";
import mysfSandwich from "@/assest/navbar/mysfsandwich.png";
import mysfKebab from "@/assest/navbar/mysfkebab.png";
import mysfCoffee from "@/assest/navbar/mysfcoffee.png";
import mysfTea from "@/assest/navbar/mysftea.png";
import mysfSmoothie from "@/assest/navbar/mysfsmoothie.png";
import mysfMilkshake from "@/assest/navbar/mysfmilkshake.png";
import mysfDonut from "@/assest/navbar/mysfdonut.png";

export const MY_NAVBAR_DATA_SF: MYSFNavbarData[] = [
  {
    url: "/breakfast",
    label: "صبحانه",
    icon: mysfEgg,
  },
  {
    url: "/soup",
    label: "آش",
    icon: mysfSoup,
  },
  {
    url: "/pizza",
    label: "پیتزا",
    icon: mysfPizza,
  },
  {
    url: "/sandwich",
    label: "فست‌فود",
    icon: mysfSandwich,
  },
  {
    url: "/irani",
    label: "ایرانی",
    icon: mysfKebab,
  },
  {
    url: "/coffee",
    label: "قهوه",
    icon: mysfCoffee,
  },
  {
    url: "/tea",
    label: "دمنوش",
    icon: mysfTea,
  },
  {
    url: "/smoothie",
    label: "بار سرد",
    icon: mysfSmoothie,
  },
  {
    url: "/milkshake",
    label: "میلک‌شیک",
    icon: mysfMilkshake,
  },
  {
    url: "/cake",
    label: "کیک",
    icon: mysfDonut,
  },
];
