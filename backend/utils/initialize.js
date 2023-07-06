
const Card = require("./../models/Card")

const businesses = [
  {
    title: "Phone Gadgets",
    subtitle: "Phones and accesories",
    description: "We offer a wide range of phones and accessories.",
    phone: "123-456-7890",
    email: "info@abcelectronics.com",
    web: "https://www.abcelectronics.com",
    imageUrl: "https://ksp.co.il/shop/items/512/173271.jpg",
    imageAlt: "ABC Electronics Logo",
    state: "California",
    country: "United States",
    city: "Los Angeles",
    street: "Main Street",
    houseNumber: "123",
    zip: "90001",
    cardNumber: 3654657,
    userId: "abc123",
    lat: 34.0522,
    lng: -118.2437,
    favorite: false,
  },
  {
    title: "Flower Shop Co.",
    subtitle: "Flower shop",
    description:
      "We serve a variety of high-quality flowers.",
    phone: "999-654-9910",
    email: "info@xyzflowers.com",
    web: "https://www.xyzcafe.com",
    imageUrl:
      "https://www.companybug.com/wp-content/uploads/2018/02/pexels-photo-529927.jpeg",
    imageAlt: "XYZ Café Logo",
    state: "California",
    country: "United States",
    city: "L.A.",
    street: "Broadway",
    houseNumber: "456",
    zipCode: "10001",
    cardNumber: 76757656,
    userId: "xyz789",
    lat: 40.7128,
    lng: -74.006,
    favorite: false,
  },
  {
    title: "JD ByRyder",
    subtitle: "Car Dealership",
    description:
      "We provide high end vehicles.",
    phone: "555-555-5555",
    email: "info@jdryder.com",
    web: "https://www.sunshinegym.com",
    imageUrl:
      "https://www.byrider.com/wp-content/uploads/2019/08/buy-here-pay-here-raleigh-byrider.jpg",
    imageAlt: "Sunshine Gym Logo",
    state: "Florida",
    country: "United States",
    city: "Miami",
    street: "Ocean Avenue",
    houseNumber: "789",
    zip: "33139",
    cardNumber: 2455688,
    userId: "sun789",
    lat: 25.7617,
    lng: -80.1918,
    favorite: false,
  },
 {
  title: "Green Thumb Motors",
  subtitle: "Quality Cars for Every Journey",
  description: "Green Thumb Motors is a trusted car dealership offering a wide selection of reliable vehicles.",
  phone: "+1 (555) 123-4567",
  email: "info@greenthumbmotors.com",
  web: "www.greenthumbmotors.com",
  imageUrl: "https://reviewpush.com/files/2014/06/dealership1.jpg",
  imageAlt: "Green Thumb Motors Showroom",
  state: "California",
  country: "United States",
  city: "Los Angeles",
  street: "123 Main Street",
  houseNumber: "Suite 101",
  zip: "90001",
  cardNumber: 656454,
  userId: "user1234",
  lat: 34.052235,
  lng: -118.243683,
  favorite: false
},
 {
  title: "Speedster burritos",
  subtitle: "Where hunger ends",
  description: "Welcome to Speedster burritos, your destination for high-quality mexican food.",
  phone: "+1 (555) 987-6543",
  email: "hello@speedsterburritos.com",
  web: "www.speedsterburritos.com",
  imageUrl: "https://holytequila.com/wp-content/uploads/2022/05/history-of-mexican-food.jpg",
  imageAlt: "Speedster burritos Showroom",
  state: "Texas",
  country: "United States",
  city: "Austin",
  street: "456 Elm Street",
  houseNumber: "Unit 5",
  zip: "78701",
  cardNumber: 654456,
  userId: "user5678",
  lat: 30.267153,
  lng: -97.743061,
  favorite: false
}
];

const initializProjFunc = async () => {
  const allcards = await Card.find({});
  if (allcards.length <= 0) {
    Card.create(businesses);
  }
};

initializProjFunc();