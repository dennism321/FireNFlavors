// All business info gathered from fireandflavorsct.com, DoorDash, Yelp, Instagram & public listings.

export const BIZ = {
  name: "Fire & Flavors",
  tagline: "Colombian Fast Food",
  address: "1100 Dixwell Ave",
  city: "Hamden, CT 06514",
  phone: "(203) 390-1344",
  phoneHref: "tel:+12033901344",
  email: "fireandflavorsct@gmail.com",
  website: "https://fireandflavorsct.com",
  instagram: "https://www.instagram.com/fireandflavorsct/",
  yelp: "https://www.yelp.com/biz/fire-and-flavors-hamden",
  doordash:
    "https://www.doordash.com/store/fire-and-flavors-(colombian-fast-food)-hamden-30794520/",
  orderOnline:
    "https://order.online/store/fire-and-flavors-(colombian-fast-food)-hamden-30794520/",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Fire+and+Flavors+1100+Dixwell+Ave+Hamden+CT+06514",
  mapsEmbed:
    "https://maps.google.com/maps?q=1100%20Dixwell%20Ave%2C%20Hamden%2C%20CT%2006514&t=&z=16&ie=UTF8&iwloc=&output=embed",
  opened: "June 2024",
  priceRange: "$10–20",
};

export const HOURS = [
  { day: "Monday", es: "Lunes", time: "11:00 AM – 9:00 PM" },
  { day: "Tuesday", es: "Martes", time: "Closed" },
  { day: "Wednesday", es: "Miércoles", time: "11:00 AM – 9:00 PM" },
  { day: "Thursday", es: "Jueves", time: "11:00 AM – 9:00 PM" },
  { day: "Friday", es: "Viernes", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday", es: "Sábado", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", es: "Domingo", time: "11:00 AM – 8:00 PM" },
];

export type MenuItem = {
  name: string;
  en?: string;
  desc: string;
  price?: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  en: string;
  emoji: string;
  note?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "antojos",
    title: "Antojos",
    en: "Cravings",
    emoji: "🔥",
    items: [
      {
        name: "Salchipapa",
        desc: "French fries, XL sausage, beef, chicken, bacon, house sauce, melted cheese, sauces & crispy potato sticks.",
        price: "$20.00",
        tag: "#1 Most Ordered",
      },
      {
        name: "Mazorcada",
        en: "Loaded Corn Bowl",
        desc: "Sweet corn mixed with beef, chicken & bacon, topped with melted cheese, our signature house sauces and shoestring fries.",
        price: "$20.00",
        tag: "Signature",
      },
      {
        name: "Tostón Loaded",
        desc: "A bed of tostones with grilled beef, chicken & bacon bathed in traditional Colombian hogao, melted cheese, sauces & potato sticks.",
        price: "$20.00",
      },
    ],
  },
  {
    id: "especiales",
    title: "Platos Típicos",
    en: "Special Plates",
    emoji: "🇨🇴",
    items: [
      {
        name: "Bandeja Paisa",
        desc: "A true Colombian classic! Crispy pork belly, juicy beef, Colombian chorizo, creamy avocado, cheese-filled arepa, rice, sweet plantain, fried egg & savory beans.",
        price: "$27.00",
        tag: "Chef's Pride",
      },
      {
        name: "Chicharrón Artesanal",
        desc: "Artisanal oven-baked pork belly served with golden papas criollas (Andean potatoes) and fresh lime.",
        price: "$16.99",
      },
      {
        name: "Sobrebarriga al Horno",
        en: "Oven-Baked Flank Steak",
        desc: "Slow oven-baked Colombian flank steak, tender and full of home-style flavor.",
      },
      {
        name: "Asado Colombiano",
        desc: "Colombian-style grilled meats with traditional sides — ask about today's asado.",
      },
    ],
  },
  {
    id: "desayuno",
    title: "Desayuno",
    en: "Breakfast",
    emoji: "🍳",
    note: "All eggs come with a side of your choice.",
    items: [
      {
        name: "Calentado El Tradicional",
        desc: "Rice, chorizo, beans, ripe plantain, arepa and authentic Colombian home-style flavor.",
        price: "$19.99",
        tag: "Breakfast Fave",
      },
      {
        name: "Huevos de la Casa",
        en: "House Eggs",
        desc: "Eggs with shredded meat and sweet corn — a hearty Colombian start to the day.",
      },
      {
        name: "Omelette Especial",
        desc: "Egg omelette with cheese, grilled chicken, ham and mushroom.",
      },
    ],
  },
  {
    id: "entradas",
    title: "Entradas",
    en: "Starters",
    emoji: "🫓",
    items: [
      {
        name: "Arepa de Choclo",
        desc: "3 golden sweet-corn arepas stuffed with melted mozzarella cheese.",
        price: "$11.00",
      },
      {
        name: "Arepa con Chorizo",
        desc: "White corn arepa stuffed with mozzarella cheese and Colombian chorizo.",
        price: "$10.00",
      },
      {
        name: "Criollitas",
        en: "Creole Potatoes",
        desc: "Papa criolla with spicy mayonnaise.",
        price: "$11.99",
      },
      {
        name: "Tostones",
        en: "Fried Green Plantains",
        desc: "Fried green plantains, mozzarella & hogao. Optional grilled meat topping.",
        price: "$9.00",
      },
      {
        name: "Plátano Relleno",
        en: "Stuffed Plantain",
        desc: "Ripe sweet plantain, stuffed and baked.",
        price: "$9.00",
      },
    ],
  },
  {
    id: "parrilla",
    title: "Parrilla",
    en: "Grill",
    emoji: "🥩",
    note: "Served with rice of the day, salad & your choice of: French fries, tostón, sweet plantain, papa criolla or onion rings.",
    items: [
      {
        name: "Res Colombiana",
        en: "Colombian Beef",
        desc: "Grilled beef topped with hogao and a fried egg.",
        price: "$19.00",
      },
      {
        name: "Pollo con Champiñones",
        en: "Mushroom Chicken",
        desc: "Grilled chicken with mushrooms, caramelized onion and cheese.",
        price: "$18.00",
        tag: "Top 3",
      },
      {
        name: "Res a la Plancha",
        en: "Grilled Beef",
        desc: "Perfectly seasoned grilled beef.",
        price: "$17.00",
        tag: "Top 3",
      },
      {
        name: "Res en Salsa de Champiñones",
        desc: "Grilled beef with a creamy white mushroom & bacon sauce.",
        price: "$16.00",
      },
      {
        name: "Pollo Hawaiano",
        en: "Hawaiian Chicken",
        desc: "Grilled chicken with pineapple sauce, ham and grilled cheese.",
      },
    ],
  },
  {
    id: "perros",
    title: "Perros Calientes",
    en: "Hot Dogs",
    emoji: "🌭",
    note: "All hot dogs come with fries.",
    items: [
      {
        name: "Dog de la Casa",
        en: "House Dog",
        desc: "XL sausage, onion, cheese, pickles, potato sticks, shredded beef, shredded chicken & sweet plantains.",
        price: "$18.00",
        tag: "Featured",
      },
      {
        name: "Dog Hawaiano",
        en: "Hawaiian Dog",
        desc: "XL sausage, onion, cheese, pickles, potato sticks & grilled meat.",
        price: "$16.00",
      },
      {
        name: "Chori-Dog",
        desc: "Juicy Colombian-style chorizo, melted cheese, onions, pickles & crispy potato sticks.",
        price: "$16.00",
      },
      {
        name: "Clásico",
        en: "Classic",
        desc: "XL sausage, onion, cheese, pickles & potato sticks.",
        price: "$14.00",
      },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    en: "Burgers",
    emoji: "🍔",
    note: "All burgers come with fries.",
    items: [
      {
        name: "De la Casa",
        desc: "Beef, cheese, onion, tomato, lettuce, sauces, fried egg, hogao & chicharrón.",
        price: "$17.00",
        tag: "House Special",
      },
      {
        name: "Gaucha",
        desc: "Beef, cheese, onion, tomato, lettuce, sauces & Colombian chorizo.",
        price: "$17.00",
      },
      {
        name: "Bacon",
        desc: "Beef patty loaded with crispy bacon, cheese and our house sauces.",
        price: "$17.00",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    en: "Drinks",
    emoji: "🥭",
    items: [
      {
        name: "Jugos en Leche",
        en: "Natural Milk Juices",
        desc: "Fresh Colombian fruit juices blended with milk — a customer favorite!",
        price: "$7.00",
        tag: "Must Try",
      },
      {
        name: "Otras Bebidas",
        desc: "Coca-Cola, Sprite, Dr. Pepper, Fanta & imports like Inca Kola and Jarritos.",
        price: "$4.00",
      },
      { name: "Soda en Botella", desc: "Cola, Diet Cola or Lemon-Lime.", price: "$3.50" },
      { name: "Soda en Lata", desc: "Canned cola, diet cola or lemon-lime.", price: "$3.00" },
      { name: "Agua", en: "Water", desc: "Pure, refreshing water.", price: "$2.00" },
    ],
  },
];

export const SIGNATURES = [
  {
    name: "Bandeja Paisa",
    desc: "The king of Colombian plates — nine traditional components on one platter.",
    price: "$27",
    img: "images/bandeja-paisa.jpg",
    color: "bg-col-yellow",
  },
  {
    name: "Salchipapa",
    desc: "Our #1 most-ordered antojo. Loaded, saucy & crunchy.",
    price: "$20",
    img: "images/salchipapa.jpg",
    color: "bg-col-red",
  },
  {
    name: "Mazorcada",
    desc: "Sweet corn, three meats, melted cheese & house sauces.",
    price: "$20",
    img: "images/mazorcada.jpg",
    color: "bg-col-blue",
  },
  {
    name: "Dog de la Casa",
    desc: "Colombian street-style hot dog piled high with everything.",
    price: "$18",
    img: "images/house-dog.jpg",
    color: "bg-fire",
  },
  {
    name: "Chicharrón Artesanal",
    desc: "Oven-baked crispy pork belly with papas criollas & lime.",
    price: "$16.99",
    img: "images/chicharron.jpg",
    color: "bg-fiesta",
  },
  {
    name: "Calentado",
    desc: "The traditional Colombian breakfast that warms the soul.",
    price: "$19.99",
    img: "images/calentado.jpg",
    color: "bg-col-yellow",
  },
];

export const REVIEWS = [
  {
    name: "Kyla Shipman",
    source: "Google",
    date: "Dec 2025",
    text: "Amazing food from amazing people! As someone who doesn't speak much Spanish and new to Colombian dishes they were so informative and willing to introduce me to many foods. I will be back often!",
  },
  {
    name: "DoorDash Customer",
    source: "DoorDash",
    text: "This food is next level good. It may seem a bit pricy but the portions are super big and super tasty. I never had experienced fast food so complex as this. Definitely recommend.",
  },
  {
    name: "Cliente Feliz",
    source: "Google",
    text: "¡Una joya colombiana que siempre quiero repetir! Desde que entras, el ambiente te hace sentir como en casa: cálido, acogedor y con ese toque alegre que caracteriza a Colombia. Cada plato tiene ese sabor casero y auténtico.",
  },
  {
    name: "Local Guide",
    source: "Google",
    text: "Food was delicious, I ordered the arepa con chorizo and a side salad. Everything was great!",
  },
  {
    name: "Regular Customer",
    source: "Google",
    text: "Affordable for your pocket, delicious seasoning, very tasty milk juices, excellent service. I hope everything goes well for you because the flavor is amazing.",
  },
  {
    name: "DoorDash Customer",
    source: "DoorDash",
    text: "Recomiendo este lugar. Sus sabores transportan a Colombia, y también quien no sea colombiano se enamorará de estos sabores. ¡Apoyen los nuevos proyectos!",
  },
  {
    name: "Happy Diner",
    source: "Google",
    text: "Las empanadas crujientes, la bandeja paisa generosa… ¡todo es delicioso! Los jugos naturales y los postres típicos son el broche de oro. Atención excelente: amables, rápidos y siempre con una sonrisa.",
  },
];

export const AMENITIES = [
  { icon: "🍽️", label: "Dine-In" },
  { icon: "🥡", label: "Takeout" },
  { icon: "🛵", label: "Delivery" },
  { icon: "🚗", label: "Curbside Pickup" },
  { icon: "🎉", label: "Catering" },
  { icon: "👨‍👩‍👧", label: "Family & Kid Friendly" },
  { icon: "👥", label: "Good for Groups" },
  { icon: "⚽", label: "Sports on TV" },
  { icon: "♿", label: "Wheelchair Accessible" },
  { icon: "🅿️", label: "Free Parking Lot" },
  { icon: "💳", label: "Cards & Mobile Pay" },
  { icon: "☕", label: "Colombian Coffee" },
];

export const COLOMBIA_SITES = [
  {
    name: "Cartagena de Indias",
    region: "Bolívar · Caribbean Coast",
    desc: "Colorful colonial streets, flower-draped balconies and walled-city magic.",
    img: "https://images.pexels.com/photos/13804522/pexels-photo-13804522.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "El Peñol de Guatapé",
    region: "Antioquia",
    desc: "Climb 740 steps up the giant monolith for unreal lake views.",
    img: "https://images.pexels.com/photos/12470916/pexels-photo-12470916.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Valle de Cocora",
    region: "Quindío · Coffee Region",
    desc: "Home of the wax palm — Colombia's national tree, reaching 60 meters tall.",
    img: "https://images.pexels.com/photos/15699964/pexels-photo-15699964.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Catedral de Sal de Zipaquirá",
    region: "Cundinamarca",
    desc: "An underground cathedral carved in a salt mine — and the hometown where Chef Diego perfected our recipes.",
    img: "images/zipaquira.jpg",
    special: true,
  },
  {
    name: "Parque Tayrona",
    region: "Magdalena · Santa Marta",
    desc: "Where the Sierra Nevada jungle meets turquoise Caribbean beaches.",
    img: "https://images.pexels.com/photos/12227830/pexels-photo-12227830.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Medellín",
    region: "Antioquia · City of Eternal Spring",
    desc: "Mountain-ringed city of innovation, flowers and the proud paisa culture.",
    img: "https://images.pexels.com/photos/16637471/pexels-photo-16637471.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Monserrate, Bogotá",
    region: "Capital District",
    desc: "The sanctuary 3,152 m above sea level watching over the capital.",
    img: "https://images.pexels.com/photos/19676274/pexels-photo-19676274.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Getsemaní",
    region: "Cartagena",
    desc: "Street art, flags and music filling every alley of this vibrant barrio.",
    img: "https://images.pexels.com/photos/29907876/pexels-photo-29907876.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const px = (id: number) =>
  `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const VIDEOS = {
  hero: {
    src: "https://videos.pexels.com/video-files/9737924/9737924-hd_1920_1080_24fps.mp4",
    poster:
      "https://images.pexels.com/videos/9737924/delicious-food-latino-restaurant-9737924.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  flag: {
    src: "https://videos.pexels.com/video-files/4997790/4997790-hd_1920_1080_24fps.mp4",
    poster:
      "https://images.pexels.com/videos/4997790/colombia-colombian-flag-flag-4997790.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  food: [
    {
      title: "Fuego en la parrilla",
      sub: "Our grill never sleeps",
      src: "https://videos.pexels.com/video-files/3192260/3192260-hd_1920_1080_25fps.mp4",
      poster: px(3192260),
    },
    {
      title: "Asado al carbón",
      sub: "Flame-kissed meats",
      src: "https://videos.pexels.com/video-files/33098049/14108027_1920_1080_60fps.mp4",
      poster:
        "https://images.pexels.com/videos/33098049/barbecue-beef-rib-33098049.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Hamburguesas",
      sub: "Stacked Colombian-style",
      src: "https://videos.pexels.com/video-files/8588704/8588704-hd_1920_1080_30fps.mp4",
      poster:
        "https://images.pexels.com/videos/8588704/beef-big-bun-burger-8588704.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Comida rápida",
      sub: "Fast food, big flavor",
      src: "https://videos.pexels.com/video-files/5986794/5986794-hd_1920_1080_30fps.mp4",
      poster: px(5986794),
    },
  ],
  people: [
    {
      title: "Compartir es vivir",
      sub: "Sharing is living",
      src: "https://videos.pexels.com/video-files/3970182/3970182-hd_1920_1080_30fps.mp4",
      poster: px(3970182),
    },
    {
      title: "La mesa familiar",
      sub: "Family table",
      src: "https://videos.pexels.com/video-files/8279992/8279992-hd_1920_1080_24fps.mp4",
      poster:
        "https://images.pexels.com/videos/8279992/adult-affection-argentina-argentina-food-8279992.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Con los parceros",
      sub: "With the crew",
      src: "https://videos.pexels.com/video-files/3970179/3970179-hd_1920_1080_30fps.mp4",
      poster: px(3970179),
    },
    {
      title: "¡Buen provecho!",
      sub: "Enjoy your meal",
      src: "https://videos.pexels.com/video-files/6305041/6305041-hd_1920_1080_25fps.mp4",
      poster: px(6305041),
    },
    {
      title: "Burger & fries",
      sub: "Good times at the table",
      src: "https://videos.pexels.com/video-files/9701461/9701461-hd_1920_1080_24fps.mp4",
      poster: px(9701461),
    },
  ],
  story: {
    src: "https://videos.pexels.com/video-files/6305028/6305028-hd_1920_1080_25fps.mp4",
    poster: px(6305028),
  },
};
