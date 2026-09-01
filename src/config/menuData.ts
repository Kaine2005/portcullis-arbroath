/* =====================================================================
   The Portcullis menus — single source of truth for all menu content.
   Rendered by src/pages/menu/[menu].astro and summarised as cards in
   MenusSection.astro.

   Two shapes are supported:
   - À la carte (Main Menu): every item has its own `price`.
   - Fixed-price set menus (Pensioners' Lunch, Children's, Weekday Deal):
     the price sits at menu level in `deal`; items have no individual price,
     and courses (categories) may carry a `note` like "Choose one".
   ===================================================================== */

export interface MenuItem {
  name: string;
  tags?: string; // dietary tags, e.g. "V, GF"
  description?: string;
  price?: string; // omit for fixed-price set-menu items
}

export interface MenuCategory {
  name: string;
  note?: string; // e.g. "Choose one"
  items: MenuItem[];
}

export interface MenuData {
  slug: 'main' | 'oap' | 'kids' | 'specials';
  title: string;
  card: string; // short blurb for the menu card
  blurb: string; // intro shown under the page title
  deal?: string; // fixed price / deal line for set menus
  availability?: string; // when the set menu is served
  intro?: string; // extra line, e.g. "Under 12's only"
  legend?: string; // dietary legend
  categories: MenuCategory[];
  footnote?: string;
}

const allergyNote =
  'Please inform your server of any allergies or intolerances when placing your order. Dishes may need to be made to individual requirements.';

export const menuData: MenuData[] = [
  {
    slug: 'main',
    title: 'Main Menu',
    card: 'Starters, mains, burgers, sizzlers, light bites and sides.',
    blurb: 'Pub favourites and hearty plates, all freshly prepared.',
    legend: 'V Vegetarian · VG Vegan · GF Gluten Free · DF Dairy Free',
    footnote: `${allergyNote} Reduced portions available on selected dishes, please ask your server.`,
    categories: [
      {
        name: 'Starters',
        items: [
          { name: 'Soup of the Day', tags: 'V, GF', description: 'Served with a bread roll & butter', price: '£4.95' },
          { name: 'Homemade Battered Garlic Mushrooms', tags: 'V, GF', description: 'Served with a side garnish & garlic mayo dip', price: '£6.95' },
          { name: 'Blaggis Bon Bons', description: 'Served with a side garnish & peppercorn sauce', price: '£6.95' },
          { name: 'Mozzarella Sticks', tags: 'V', description: 'Served with a side garnish & sweet chilli dip', price: '£6.85' },
          { name: 'Tempura Prawns', description: 'Served with a side garnish & sweet chilli dip', price: '£7.95' },
          { name: 'Nachos & Cheese', tags: 'V', description: 'Add chilli £2.00', price: '£5.00' },
        ],
      },
      {
        name: 'Mains',
        items: [
          { name: 'Steak Pie', description: 'Served with chips or potatoes & vegetables', price: '£14.95' },
          { name: 'Battered or Breaded Haddock', tags: 'GF, DF', description: 'Served with chips & side salad or garden peas', price: '£14.50' },
          { name: 'Breaded Scampi', tags: 'DF, GF', description: 'Served with chips, side salad & coleslaw', price: '£13.95' },
          { name: 'Macaroni Cheese', tags: 'V, GF', description: 'Served with chips or garlic bread, side salad & coleslaw', price: '£12.50' },
          { name: 'Hunters Chicken', description: 'Served with chips or garlic bread, side salad & coleslaw', price: '£14.50' },
          { name: "Chef's Curry, Chicken or Veg", tags: 'V, GF', description: 'Served with rice or chips & naan bread', price: '£12.95' },
          { name: 'Chicken Goujons', tags: 'GF', description: 'Served with chips, side salad, coleslaw & a dip of your choice: BBQ, mayo, garlic mayo, cajun mayo or sweet chilli', price: '£13.50' },
          { name: 'Pepper Chicken', tags: 'GF', description: 'Served with chips or rice & vegetables', price: '£14.95' },
          { name: "Chef's Salad", tags: 'V, GF', description: 'Mixed salad with a choice of cheese, ham, tuna mayo or cajun chicken & chips', price: '£11.95' },
          { name: 'Tempura Vegetables', tags: 'V, VG, GF', description: 'Served with chips, side salad & sweet chilli sauce', price: '£11.95' },
        ],
      },
      {
        name: 'Burgers',
        items: [
          { name: 'American Style BBQ Bacon Burger', description: 'Two battered chicken fillets & bacon on a bun with cheese, lettuce, tomato and BBQ sauce. Served with chips, onion rings & coleslaw', price: '£13.95' },
          { name: 'Aberdeen Angus Beef Burger', description: '6oz Aberdeen Angus beef burger on a bun with cheese, lettuce & tomato. Served with chips, onion rings & coleslaw', price: '£12.95' },
          { name: 'Porty Burger', description: '6oz Aberdeen Angus beef burger on a bun with cheese, blaggis, peppercorn sauce, lettuce & tomato. Served with chips, onion rings & coleslaw', price: '£14.50' },
          { name: 'Triple C Burger', description: 'Battered cajun chicken breast topped with cheese on a bun with lettuce & tomato. Served with chips, onion rings, cajun mayo & coleslaw', price: '£14.25' },
          { name: 'Mac Burger', description: '6oz Aberdeen Angus beef burger on a bun with lettuce, tomato & topped with macaroni cheese. Served with chips, onion rings & coleslaw', price: '£13.50' },
          { name: 'Chilli Cheese Burger', description: '6oz Aberdeen Angus beef burger on a bun with lettuce, tomato & topped with chilli. Served with chips, onion rings & coleslaw', price: '£14.50' },
          { name: 'Spicy Bean Burger', tags: 'V, VG', description: 'Spicy bean burger on a bun with sweet chilli sauce, lettuce & tomato. Served with chips & coleslaw', price: '£12.95' },
        ],
      },
      {
        name: 'Sizzlers',
        items: [
          { name: '8oz Ribeye Steak', tags: 'DF, GF', description: 'Served with chips', price: '£24.95' },
          { name: '4oz Ribeye Steak & Scampi', tags: 'DF, GF', description: 'Served with chips', price: '£22.95' },
          { name: '8oz Ribeye Steak & Garlic Prawns', description: 'Served with chips', price: '£27.95' },
          { name: '4oz Ribeye & Cajun Chicken', tags: 'DF, GF', description: 'Served with chips', price: '£22.95' },
          { name: 'Mixed Grill', tags: 'GF', description: '4oz rump steak, 4oz gammon steak, lamb chop, sausages & chips', price: '£27.95' },
          { name: 'Porty Combo', description: '4oz rump steak, 4oz gammon steak, lamb chop, sausages, cajun chicken, egg, scampi & chips', price: '£29.95' },
          { name: '6oz Gammon Steak', tags: 'DF, GF', description: 'Served with egg or pineapple ring & chips', price: '£13.95' },
          { name: 'Cajun Chicken', tags: 'DF, GF', description: 'Cajun chicken breast served with chips', price: '£16.95' },
          { name: 'Cajun Chicken & Scampi', tags: 'DF, GF', description: 'Served with chips', price: '£20.95' },
          { name: 'Onion Rings', price: '£3.00' },
          { name: 'Peppercorn Sauce', price: '£2.95' },
          { name: 'Mixed Garnish', description: 'Tomato, mushroom, fried onions & onion rings', price: '£3.50' },
        ],
      },
      {
        name: 'Light Bites',
        items: [
          { name: 'Soup & Filled Panini', description: 'Choose from cheese, ham, tuna mayo, cajun chicken or coleslaw', price: '£8.50' },
          { name: 'Toastie', description: 'Choose from cheese, ham, tuna mayo, cajun chicken or coleslaw', price: '£5.00' },
          { name: 'Panini', description: 'Choose from cheese, ham, tuna mayo, cajun chicken or coleslaw', price: '£6.00' },
          { name: 'Loaded Fries', tags: 'V, GF', description: 'Choose from macaroni cheese, tuna mayo, cheese & curry sauce, peppercorn sauce or coleslaw', price: '£7.00' },
          { name: 'Chips and Cheese', tags: 'V, GF', price: '£4.50' },
        ],
      },
      {
        name: 'Sides',
        items: [
          { name: 'Garlic Bread', tags: 'V', price: '£3.95' },
          { name: 'Cheesy Garlic Bread', tags: 'V', price: '£4.10' },
          { name: 'Side Salad', tags: 'V, VG, GF', price: '£3.95' },
          { name: 'Onion Rings', tags: 'V', price: '£3.00' },
          { name: 'Chips', tags: 'V, VG, GF', price: '£3.00' },
          { name: 'Coleslaw', tags: 'V, GF', price: '£3.50' },
        ],
      },
    ],
  },

  {
    slug: 'oap',
    title: "Pensioners' Lunchtime Special",
    card: 'Three courses for £10, weekday lunchtimes.',
    blurb: 'A proper lunch at a proper price for our over-60s.',
    deal: '£10.00',
    availability: '12 noon to 2pm, Monday to Friday',
    footnote: allergyNote,
    categories: [
      {
        name: 'Starter',
        items: [
          { name: 'Soup of the Day', description: 'A hearty bowl of our daily soup served with a bread roll' },
        ],
      },
      {
        name: 'Main Course',
        note: 'Choose one',
        items: [
          { name: 'Fish, Chips and Peas', description: 'Freshly battered fish served with crispy chips and garden peas' },
          { name: 'Steak Pie, Chips and Peas', description: 'Steak in a rich gravy served with crispy chips and garden peas' },
          { name: 'Macaroni Cheese, Chips and Salad', description: 'Creamy macaroni cheese paired with crispy chips and a fresh side salad' },
          { name: 'Curry with Rice or Chips', description: 'Flavourful curry served with a choice of rice or chips' },
        ],
      },
      {
        name: 'Dessert',
        note: 'Choose one. Each hot dessert served with a choice of ice cream, custard or double cream',
        items: [
          { name: 'Ice Cream', description: 'A scoop of creamy vanilla, chocolate or strawberry ice cream' },
          { name: 'Apple Crumble', description: 'Warm apple crumble with a crumbly topping and a hint of cinnamon' },
          { name: 'Spotted Dick', description: 'Traditional steamed suet pudding with dried fruits' },
        ],
      },
      {
        name: 'Beverage',
        note: 'Choose one',
        items: [
          { name: 'Tea', description: 'Traditional black tea with milk' },
          { name: 'Coffee', description: 'Freshly brewed coffee, served black or with milk' },
        ],
      },
    ],
  },

  {
    slug: 'kids',
    title: "Children's Menu",
    card: "Under 12s, £5.95 including a drink.",
    blurb: 'Little favourites the whole family will love.',
    deal: '£5.95',
    intro: "Under 12's only",
    footnote: allergyNote,
    categories: [
      {
        name: 'Choose a Main',
        note: 'All children’s meals served with chips and beans or peas. Diluting juice included. A selection of sweet treats is available on our dessert menu.',
        items: [
          { name: 'Macaroni Cheese', tags: 'V, GF' },
          { name: 'Sausages', tags: 'DF' },
          { name: 'Fish Fingers', tags: 'DF' },
          { name: 'Cheese Pizza', tags: 'V' },
          { name: 'Chicken Nuggets' },
          { name: 'Steak Pie' },
        ],
      },
    ],
  },

  {
    slug: 'specials',
    title: 'The Portcullis Weekday Deal',
    card: '2 courses £16.50 or 3 for £21, Monday to Friday.',
    blurb: 'Great value, any weekday.',
    deal: '2 Courses £16.50 · 3 Courses £21.00',
    availability: 'Monday to Friday',
    footnote: allergyNote,
    categories: [
      {
        name: 'Starter',
        note: 'Choose one',
        items: [
          { name: 'Soup of the Day', tags: 'V, GF', description: 'A hearty bowl of our daily soup served with a bread roll' },
          { name: 'Mozzarella Sticks', tags: 'V', description: 'Golden fried mozzarella served with a sweet chilli dip' },
          { name: 'Blaggis Bon Bons', description: 'A twist on the traditional dish, lightly battered black pudding and haggis bon bons served with a peppercorn sauce' },
        ],
      },
      {
        name: 'Main Course',
        note: 'Choose one',
        items: [
          { name: 'Aberdeen Angus Beef Burger', description: 'Served in a toasted bun with chips and coleslaw' },
          { name: 'Chicken Goujons', tags: 'GF', description: 'Crispy battered chicken strips with chips, salad and coleslaw' },
          { name: "Chef's Curry, Chicken or Veg", tags: 'V, GF', description: 'A flavourful weekly curry special served with your choice of rice or chips' },
          { name: 'Macaroni Cheese', tags: 'V, GF', description: 'Creamy macaroni cheese served with chips and a side salad' },
          { name: 'Scampi', tags: 'DF, GF', description: 'Breaded scampi pieces served with chips and salad' },
          { name: 'Steak Pie', description: 'Traditional steak pie in rich gravy, served with chips and veg' },
        ],
      },
      {
        name: 'Dessert',
        note: 'Choose one. Each hot dessert served with a choice of ice cream, custard or double cream',
        items: [
          { name: 'Porty Cheesecake', tags: 'V', description: "See our board for today's flavour" },
          { name: 'Ice Cream or Sorbet', tags: 'V, VE, GF', description: 'Creamy vanilla, chocolate or strawberry ice cream, or mango, lemon or raspberry sorbet' },
          { name: 'Apple and Cinnamon Crumble', tags: 'V', description: 'Warm apple crumble with a spiced cinnamon twist' },
          { name: 'Hot Chocolate Fudge Cake', tags: 'V', description: 'Decadent chocolate cake served warm with chocolate sauce' },
        ],
      },
    ],
  },
];

// Summary cards for the Menus overview page.
export const menuCards = menuData.map((m) => ({ slug: m.slug, title: m.title, blurb: m.card }));

export type MenuSlug = MenuData['slug'];
