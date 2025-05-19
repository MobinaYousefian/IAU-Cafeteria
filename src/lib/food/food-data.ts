import { MyCategorySf } from "@/lib/food/food-data.type";

import mysfOmelette from "@/assest/menu-items/food/breakfast/mysf-omelette.jpg";
import mysfFriedEgg from "@/assest/menu-items/food/breakfast/mysf-fried-egg.jpg";
import mysfSausageEgg from "@/assest/menu-items/food/breakfast/mysf-sausage-egg.jpg";
import mysfOmelettePiron from "@/assest/menu-items/food/breakfast/mysf-omelette-piron.jpg";
import mysfAdasi from "@/assest/menu-items/food/breakfast/mysf-adasi.jpg";
import mysfShapoori from "@/assest/menu-items/food/breakfast/mysf-shapoori.jpg";
import mysfLobia from "@/assest/menu-items/food/breakfast/mysf-lobia.jpg";
import mysfAshReshte from "@/assest/menu-items/food/breakfast/mysf-Ash-Reshteh.jpg";

import mysfPastaSalad from "@/assest/menu-items/food/salad/mysf-pasta-salad.jpg";

import mysfPizzaMixup from "@/assest/menu-items/food/pizza/mysf-pizza-mixup.jpg";
import mysfPizzaChicken from "@/assest/menu-items/food/pizza/mysf-chicken-mushroom-pizza.jpg";
import mysfPizzaVeggi from "@/assest/menu-items/food/pizza/mysf-pizza-veggi.jpg";
import mysfPizzaPiron from "@/assest/menu-items/food/pizza/mysf-pizza-piron.jpg";

import mysfHamburger from "@/assest/menu-items/food/fastfood/mysf-hamburger.jpg";
import mysfHotDog from "@/assest/menu-items/food/fastfood/mysf-hotdog.jpg";
import mysfHotDogMushCheese from "@/assest/menu-items/food/fastfood/mysf-hotdog-mush-Cheese.jpg";
import mysfHotDogSpecial from "@/assest/menu-items/food/fastfood/mysf-hotdog-special.jpg";
import mysfFalafel from "@/assest/menu-items/food/fastfood/mysf-falafel.jpg";
import mysfFalafelMushroom from "@/assest/menu-items/food/fastfood/falafel-mysf-mushroom.jpg";
import mysfColdSandwich from "@/assest/menu-items/food/fastfood/mysf-cold-sandwich3.jpg";
import mysfChickenSandwich from "@/assest/menu-items/food/fastfood/mysf-chicken-sandwich.jpg";
import mysfChickenMushroomSandwich from "@/assest/menu-items/food/fastfood/mysf-chicken-sandwich-mushroom.jpg";
import mysfFrenchFries from "@/assest/menu-items/food/fastfood/mysf-french-fries.jpg";
import mysfFrenchFriesMushroom from "@/assest/menu-items/food/fastfood/mysf-french-fries-mushroom.jpg";
import mysfZhambonTanoori from "@/assest/menu-items/food/fastfood/mysf-zhambon-tanoori.jpg";
import mysfCoctel from "@/assest/menu-items/food/fastfood/mysf-coctel.jpg";
import mysfBandariSandwich from "@/assest/menu-items/food/fastfood/mysf-bandari-sandwich.jpg";
import mysfBandariSandwichMushroom from "@/assest/menu-items/food/fastfood/mysf-bandari-mushroom.jpg";

import mysfGhorme from "@/assest/menu-items/food/irani/mysf-ghorme.jpg";
import mysfGheime from "@/assest/menu-items/food/irani/mysf-gheime.jpg";
import mysfChelojojeKabab from "@/assest/menu-items/food/irani/mysf-Chelojoje_Kabab.jpg";
import mysfKobide from "@/assest/menu-items/food/irani/mysf-Kobide.jpg";
import mysfZereshkPoloMorgh from "@/assest/menu-items/food/irani/mysf-zereshk-polo-ba-morgh.jpg";

import mysfEspressoDopin from "@/assest/menu-items/drinks/coffee/mysf-Espresso-dopin.jpg";
import mysfEspressoKortado from "@/assest/menu-items/drinks/coffee/mysf-Espresso-kortado.jpg";
import mysfAmericano from "@/assest/menu-items/drinks/coffee/mysf-americano.jpg";
import mysfCappuccino from "@/assest/menu-items/drinks/coffee/mysf-cappuccino.jpg";
import mysfLatte from "@/assest/menu-items/drinks/coffee/mysf-latte.jpg";
import mysfCaramelMacchiato from "@/assest/menu-items/drinks/coffee/mysf-caramel-Macchiato.jpg";
import mysfMocka from "@/assest/menu-items/drinks/coffee/mysf-mocka.jpg";

import mysfKrackTea from "@/assest/menu-items/drinks/herbal-tea/mysf-krack-tea.jpg";
import mysfMasalaTea from "@/assest/menu-items/drinks/herbal-tea/mysf-masala-tea.jpg";

import mysfSaffron from "@/assest/menu-items/drinks/cold-bar/mysf-Saffron.jpg";
import mysfCoconutMilk from "@/assest/menu-items/drinks/cold-bar/mysf-Coconut-milk.jpg";
import mysfCocoaMilk from "@/assest/menu-items/drinks/cold-bar/mysf-cocoa-milk.jpg";
import mysfMilk from "@/assest/menu-items/drinks/cold-bar/mysf-milk.jpg";

import mysfHotChocolate from "@/assest/menu-items/drinks/hot-bar/mysf-hot-chocolate.jpg";
import mysfPinkChocolate from "@/assest/menu-items/drinks/hot-bar/mysf-pink-chocolate.jpg";

export const MY_FOOD_DATA_SF: MyCategorySf[] = [
  {
    id: "breakfast",
    label: "صبحانه",
    menu: [
      {
        id: "b11",
        image: mysfOmelette,
        label: "املت",
        ingredients: ["تخم‌مرغ", "سس گوجه‌فرنگی", "جعفری ساطوری"],
        stats: "available",
        price: 60,
      },
      {
        id: "b12",
        image: mysfFriedEgg,
        label: "نیمرو",
        ingredients: ["تخم‌مرغ", "جعفری ساطوری"],
        stats: "available",
        price: 55,
      },
      {
        id: "b13",
        image: mysfSausageEgg,
        label: "کوکتل تخم‌مرغ",
        ingredients: ["تخم‌مرغ", "سوسیس کوکتل"],
        stats: "available",
        price: 70,
      },
      {
        id: "b14",
        image: mysfOmelettePiron,
        label: "املت پیرون",
        ingredients: ["سس گوجه‌فرنگی", "تخم‌مرغ", "قارچ", "برگ ریحان"],
        stats: "available",
        price: 75,
      },
      {
        id: "b15",
        image: mysfAdasi,
        label: "عدسی",
        ingredients: ["عدس پخته‌شده", "سس گوجه‌فرنگی", "آبلیمو یا نارنج"],
        stats: "sold",
        price: 55,
      },
      {
        id: "b16",
        image: mysfShapoori,
        label: "شاپوری",
        ingredients: ["تخم‌مرغ", "سس گوجه‌فرنگی", "لوبیا پخته‌شده"],
        stats: "available",
        price: 70,
      },
      {
        id: "b17",
        image: mysfAshReshte,
        label: "آش رشته",
        ingredients: [
          "سبزی آش",
          "حبوبات",
          "رشته",
          "کشک",
          "پیاز سرخ‌شده",
          "نعنا سرخ‌شده",
        ],
        stats: "sold",
        price: 55,
      },
      {
        id: "b18",
        image: mysfLobia,
        label: "لوبیا",
        ingredients: ["خوراک لوبیا"],
        stats: "available",
        price: 55,
      },
    ],
  },
  {
    id: "salad",
    label: "سالاد",
    menu: [
      {
        id: "s11",
        image: mysfPastaSalad,
        label: "سالاد ماکارونی",
        ingredients: [
          "ماکارونی فرمی پخته‌شده",
          "ذرت پخته‌شده",
          "سوسیس کوکتل",
          "جعفری ساطوری",
          "خیارشور",
          "سس مایونز",
        ],
        stats: "available",
        price: 75,
      },
    ],
  },
  {
    id: "pizza",
    label: "پیتزا",
    menu: [
      {
        id: "p11",
        image: mysfPizzaMixup,
        label: "پیتزا مخلوط",
        ingredients: [
          "خمیر پیتزا",
          "میکس کالباس گوشت و مرغ",
          "میکس سوسیس کوکتل کوشت و مرغ",
          "زیتون",
          "فلفل دلمه",
          "قارچ",
          "پنیر",
        ],
        stats: "available",
        price: 110,
      },
      {
        id: "p12",
        image: mysfPizzaChicken,
        label: "پیتزا مرغ",
        ingredients: [
          "خمیر پیتزا",
          "سینه مرغ پخته‌شده",
          "سس مرغ",
          "زیتون",
          "فلفل دلمه",
          "قارچ",
          "پنیر",
        ],
        stats: "available",
        price: 130,
      },
      {
        id: "p13",
        image: mysfPizzaVeggi,
        label: "پیتزا سبزیجات",
        ingredients: [
          "خمیر پیتزا",
          "بیبی اسفناج",
          "ذرت بخارپز",
          "ریحان",
          "زیتون",
          "فلفل دلمه",
          "قارچ",
          "پنیر کم‌چرب",
        ],
        stats: "available",
        price: 100,
      },
      {
        id: "p14",
        image: mysfPizzaPiron,
        label: "پیتزا پیرون",
        ingredients: [
          "خمیر پیتزا",
          "سس مخصوص",
          "زیتون",
          "فلفل دلمه",
          "قارچ",
          "پنیر",
        ],
        stats: "available",
        price: 150,
      },
    ],
  },
  {
    id: "fastfood",
    label: "فست‌فود",
    menu: [
      {
        id: "f11",
        image: mysfHamburger,
        label: "همبرگر",
        ingredients: [
          "200 گرم گوشت گوساله چرخ‌شده",
          "قارچ سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کاهو",
          "پنیر چدار",
        ],
        stats: "available",
        price: 70,
      },
      {
        id: "f12",
        image: mysfHamburger,
        label: "همبرگر مخصوص",
        ingredients: [
          "200 گرم گوشت گوساله چرخ‌شده",
          "قارچ سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کاهو",
          "پیاز کاراملی",
          "پنیر چدار",
        ],
        stats: "available",
        price: 80,
      },
      {
        id: "f13",
        image: mysfHamburger,
        label: "همبرگر قارچ و پنیر",
        ingredients: [
          "200 گرم گوشت گوساله چرخ‌شده",
          "قارچ سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کاهو",
          "پنیر چدار",
          "سس پنیر و قارچ",
        ],
        stats: "available",
        price: 85,
      },
      {
        id: "f14",
        image: mysfHamburger,
        label: "چیزبرگر",
        ingredients: [
          "200 گرم گوشت گوساله چرخ‌شده",
          "قارچ سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کاهو",
          "پنیر چدار",
          "میکس پنیر",
        ],
        stats: "available",
        price: 90,
      },
      {
        id: "f15",
        image: mysfHamburger,
        label: "رویال برگر",
        ingredients: [
          "200 گرم گوشت گوساله چرخ‌شده (2 لایه)",
          "قارچ سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کاهو",
          "پنیر چدار (2 لایه)",
        ],
        stats: "sold",
        price: 110,
      },
      {
        id: "f16",
        image: mysfHotDog,
        label: "هات داگ",
        ingredients: ["هات داگ سرخ‌شده", "سس خردل", "سس گوجه‌فرنگی"],
        stats: "available",
        price: 75,
      },
      {
        id: "f17",
        image: mysfHotDogMushCheese,
        label: "هات داگ با قارچ و پنیر",
        ingredients: [
          "هات داگ سرخ‌شده",
          "سس خردل",
          "سس گوجه‌فرنگی",
          "سس قارچ و پنیر",
        ],
        stats: "available",
        price: 90,
      },
      {
        id: "f18",
        image: mysfHotDogSpecial,
        label: "هات داگ مخصوص",
        ingredients: [
          "هات داگ سرخ‌شده",
          "سس خردل",
          "سس گوجه‌فرنگی",
          "سس قارچ و پنیر",
          "کلم و جعفری ساطوری",
          "پنیر دیپ",
        ],
        stats: "available",
        price: 110,
      },
      {
        id: "f19",
        image: mysfFalafel,
        label: "فلافل ساده",
        ingredients: [
          "فلافل سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کلم جعفری ساطوری",
        ],
        stats: "available",
        price: 50,
      },
      {
        id: "f20",
        image: mysfFalafelMushroom,
        label: "فلافل قارچ و پنیر",
        ingredients: [
          "فلافل سرخ‌شده",
          "گوجه‌فرنگی",
          "خیارشور",
          "کلم جعفری ساطوری",
          "سس قارچ و پنیر",
        ],
        stats: "available",
        price: 70,
      },
      {
        id: "f21",
        image: mysfColdSandwich,
        label: "ساندویچ سرد",
        ingredients: [
          "کالباس گوشت و مرغ",
          "خیارشور",
          "گوجه‌فرنگی",
          "کاهو",
          "سس ساندویچ",
        ],
        stats: "available",
        price: 70,
      },
      {
        id: "f22",
        image: mysfChickenSandwich,
        label: "ساندویچ مرغ",
        ingredients: [
          "سینه مرغ سرخ‌شده",
          "جعفری ساطوری",
          "سس مخصوص",
          "خیارشور و گوجه",
        ],
        stats: "available",
        price: 90,
      },
      {
        id: "f23",
        image: mysfChickenMushroomSandwich,
        label: "ساندویچ مرغ با قارچ و پنیر",
        ingredients: [
          "سینه مرغ سرخ‌شده",
          "جعفری ساطوری",
          "سس مخصوص",
          "خیارشور و گوجه",
          "سس قارچ و پنیر",
        ],
        stats: "available",
        price: 110,
      },
      {
        id: "f24",
        image: mysfFrenchFries,
        label: "سیب زمینی",
        ingredients: ["200 گرم سیب زمینی سرخ‌شده", "سس مخصوص"],
        stats: "available",
        price: 80,
      },
      {
        id: "f25",
        image: mysfFrenchFriesMushroom,
        label: "سیب زمینی با قارچ و پنیر",
        ingredients: [
          "200 گرم سیب زمینی سرخ‌شده",
          "سس مخصوص",
          "سس قارچ و پنیر",
        ],
        stats: "available",
        price: 95,
      },
      {
        id: "f26",
        image: mysfZhambonTanoori,
        label: "ژامبون تنوری",
        ingredients: [
          "200 گرم ژامبون گوشت یا مرغ",
          "قارچ سرخ‌شده",
          "میکس پنیر",
        ],
        stats: "sold",
        price: 110,
      },
      {
        id: "f27",
        image: mysfCoctel,
        label: "کوکتل",
        ingredients: [
          "کوکتل گوشت یا مرغ گریل‌شده",
          "خیارشور و گوجه",
          "کلم جعفری ساطوری",
          "سس ساندویچ",
        ],
        stats: "sold",
        price: 70,
      },
      {
        id: "f28",
        image: mysfBandariSandwich,
        label: "بندری",
        ingredients: [
          "سوسیس بندری سرخ‌شده",
          "سس گوجه‌فرنگی",
          "پیاز کاراملی",
          "خیارشور گوجه",
        ],
        stats: "available",
        price: 70,
      },
      {
        id: "f29",
        image: mysfBandariSandwichMushroom,
        label: "بندری با قارچ و پنیر",
        ingredients: [
          "سوسیس بندری سرخ‌شده",
          "سس گوجه‌فرنگی",
          "پیاز کاراملی",
          "خیارشور گوجه",
          "سس قارچ و پنیر",
        ],
        stats: "available",
        price: 85,
      },
    ],
  },
  {
    id: "irani",
    label: "ایرانی",
    menu: [
      {
        id: "i11",
        image: mysfGhorme,
        label: "چلو قورمه‌سبزی",
        ingredients: [
          "یک پرس برنح ایرانی",
          "گوشت قورمه",
          "سبزیجات خورشت",
          "لوبیا پخته‌شده",
        ],
        stats: "available",
        price: 95,
        studentPrice: 75,
      },
      {
        id: "i12",
        image: mysfGheime,
        label: "چلو قیمه",
        ingredients: [
          "یک پرس پلو ایرانی",
          "گوشت قیمه",
          "لپه پخته‌شده",
          "سس گوجه‌فرنگی",
          "سیب‌زمینی سرخ‌شده",
        ],
        stats: "available",
        price: 95,
        studentPrice: 75,
      },
      {
        id: "i13",
        image: mysfChelojojeKabab,
        label: "چلو جوجه کباب",
        ingredients: [
          "یک پرس پلو ایرانی",
          "150 گرم جوجه کباب زعفرانی",
          "گوجه کبابی",
        ],
        stats: "available",
        price: 110,
        studentPrice: 90,
      },
      {
        id: "i14",
        image: mysfKobide,
        label: "چلو کباب کوبیده",
        ingredients: [
          "یک پرس پلو ایرانی",
          "150 گرم کوبیده گوساله",
          "گوجه کبابی",
        ],
        stats: "available",
        price: 105,
        studentPrice: 85,
      },
      {
        id: "i15",
        image: mysfZereshkPoloMorgh,
        label: "زرشک پلو با مرغ",
        ingredients: [
          "یک پرس زرشک پلو زعفرانی ایرانی",
          "ران مرغ",
          "سس گوجه‌فرنگی",
          "خیارشور",
        ],
        stats: "available",
        price: 105,
        studentPrice: 90,
      },
    ],
  },
  {
    id: "coffee",
    label: "قهوه",
    menu: [
      {
        id: "c11",
        image: mysfEspressoDopin,
        label: "اسپرسو دوپین روبوستا",
        ingredients: ["عصاره قهوه 100 روبوستا"],
        stats: "available",
        price: 40,
      },
      {
        id: "c12",
        image: mysfEspressoDopin,
        label: "اسپرسو دوپین 100 عربیکا",
        ingredients: ["عصاره قهوه 100 عربیکا"],
        stats: "available",
        price: 50,
      },
      {
        id: "c13",
        image: mysfEspressoKortado,
        label: "اسپرسو کورتادو",
        ingredients: ["عصاره قهوه ترکیبی"],
        stats: "available",
        price: 50,
      },
      {
        id: "c14",
        image: mysfAmericano,
        label: "امریکانو",
        ingredients: ["عصاره قهوه", "آب جوش"],
        stats: "available",
        price: 50,
      },
      {
        id: "c15",
        image: mysfCappuccino,
        label: "کاپوچینو شیرین",
        ingredients: ["عصاره قهوه", "شیر گرم", "شکر"],
        stats: "available",
        price: 70,
      },
      {
        id: "c16",
        image: mysfCappuccino,
        label: "کاپوچینو تلخ",
        ingredients: ["عصاره قهوه", "شیر گرم"],
        stats: "available",
        price: 60,
      },
      {
        id: "c17",
        image: mysfLatte,
        label: "لاته تلخ",
        ingredients: ["عصاره قهوه", "شیر گرم"],
        stats: "available",
        price: 60,
      },
      {
        id: "c18",
        image: mysfLatte,
        label: "لاته فندوقی",
        ingredients: ["عصاره قهوه", "شیر گرم", "سیروپ فندوق"],
        stats: "available",
        price: 70,
      },
      {
        id: "c19",
        image: mysfCaramelMacchiato,
        label: "کارامل ماکیاتو",
        ingredients: ["عصاره قهوه", "شیر گرم", "کارامل و سیروپ"],
        stats: "available",
        price: 70,
      },
      {
        id: "c20",
        image: mysfMocka,
        label: "موکا",
        ingredients: ["عصاره قهوه", "شیر گرم", "سس شکلات"],
        stats: "available",
        price: 70,
      },
    ],
  },
  {
    id: "herbal-tea",
    label: "دمنوش",
    menu: [
      {
        id: "h11",
        image: mysfKrackTea,
        label: "کَرَک",
        ingredients: [],
        stats: "available",
        price: 60,
      },
      {
        id: "h12",
        image: mysfMasalaTea,
        label: "ماسالا",
        ingredients: [],
        stats: "available",
        price: 60,
      },
    ],
  },
  {
    id: "cold-bar",
    label: "بار سرد",
    menu: [
      {
        id: "cb11",
        image: mysfSaffron,
        label: "زعفران پسته",
        ingredients: [],
        stats: "available",
        price: 60,
      },
      {
        id: "cb12",
        image: mysfCoconutMilk,
        label: "شیر نارگیل",
        ingredients: [],
        stats: "available",
        price: 50,
      },
      {
        id: "cb13",
        image: mysfCocoaMilk,
        label: "شیر کاکائو",
        ingredients: [],
        stats: "available",
        price: 40,
      },
      {
        id: "cb14",
        image: mysfMilk,
        label: "شیر",
        ingredients: [],
        stats: "available",
        price: 20,
      },
    ],
  },
  {
    id: "hot-bar",
    label: "بار گرم",
    menu: [
      {
        id: "hb11",
        image: mysfHotChocolate,
        label: "هات چاکلت",
        ingredients: [],
        stats: "available",
        price: 70,
      },
      {
        id: "hb12",
        image: mysfPinkChocolate,
        label: "پینک چاکلت",
        ingredients: [],
        stats: "available",
        price: 60,
      },
    ],
  },
  {
    id: "cake",
    label: "کیک",
    menu: [],
  },
];
