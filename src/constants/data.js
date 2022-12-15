import images from "./images";

const dinners = [
  {
    title: "Aloo Tama",
    price: "80",
    tags: "vegetarian | spicy",
  },
  {
    title: "Sekuwa",
    price: "120",
    tags: "non-vegetarian | grilled",
  },
  {
    title: "Dhido",
    price: "89",
    tags: "gluten-free | traditional",
  },
  {
    title: "Cauliflower and Pea Curry",
    price: "56",
    tags: "vegetarian | gluten-free",
  },
  {
    title: "Chicken Momo",
    price: "65",
    tags: "non-vegetarian | steamed",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Cuisine Inventory",
    subtitle: "Exploring the Ingredients of Nepali Cuisine",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Best Growing Restaurant.",
  },
  {
    imgUrl: images.award05,
    title: "A+ Hospitality",
    subtitle: "Service that showcase traditonality.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Deliverance of quality.",
  },
];

export default { dinners, cocktails, awards };
