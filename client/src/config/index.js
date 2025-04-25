export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "fiction", label: "Fiction" },
      { id: "non-fiction", label: "Non-Fiction" },
      { id: "romance", label: "Romance" },
      { id: "history", label: "History" },
      { id: "science", label: "Science" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "jkr", label: "J.K. Rowling" },
      { id: "george_orwell", label: "George Orwell" },
      { id: "tolkien", label: "J.R.R. Tolkien" },
      { id: "dan_brown", label: "Dan Brown" },
      { id: "stephen_king", label: "Stephen King" },
      { id: "paulo_coelho", label: "Paulo Coelho" },,
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "All Books",
    path: "/shop/listing",
  },
  {
    id: "fiction",
    label: "Fiction",
    path: "/shop/listing",
  },
  {
    id: "non-fiction",
    label: "Non-Fiction",
    path: "/shop/listing",
  },
  {
    id: "romance",
    label: "Romance",
    path: "/shop/listing",
  },
  {
    id: "history",
    label: "History",
    path: "/shop/listing",
  },
  {
    id: "science",
    label: "Science",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];


export const categoryOptionsMap = {
  fiction: "Fiction",
  "non-fiction": "Non-Fiction",
  romance: "Romance",
  history: "History",
  science: "Science",
};


export const brandOptionsMap = {
  jkr: "J.K. Rowling",
  george_orwell: "George Orwell",
  tolkien: "J.R.R. Tolkien",
  dan_brown: "Dan Brown",
  stephen_king: "Stephen King",
  paulo_coelho: "Paulo Coelho",
};


export const filterOptions = {
  category: [
    { id: "fiction", label: "Fiction" },
    { id: "non-fiction", label: "Non-Fiction" },
    { id: "romance", label: "Romance" },
    { id: "history", label: "History" },
    { id: "science", label: "Science" },
  ],
  brand: [
    { id: "jkr", label: "J.K. Rowling" },
    { id: "george_orwell", label: "George Orwell" },
    { id: "tolkien", label: "J.R.R. Tolkien" },
    { id: "dan_brown", label: "Dan Brown" },
    { id: "stephen_king", label: "Stephen King" },
    { id: "paulo_coelho", label: "Paulo Coelho" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
