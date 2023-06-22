
const Card = require("./../models/Card")

const businesses = [
  {
    title: "ABC Electronics",
    subtitle: "Electronics Retailer",
    description: "We offer a wide range of electronic devices and accessories.",
    phone: "123-456-7890",
    email: "info@abcelectronics.com",
    web: "https://www.abcelectronics.com",
    imageUrl: "https://www.capi.com/wp-content/uploads/2019/02/SPL-L1.png",
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
    title: "XYZ Café",
    subtitle: "Coffee Shop",
    description:
      "We serve a variety of high-quality coffee and delicious pastries.",
    phone: "987-654-3210",
    email: "info@xyzcafe.com",
    web: "https://www.xyzcafe.com",
    imageUrl:
      "https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg",
    imageAlt: "XYZ Café Logo",
    state: "New York",
    country: "United States",
    city: "New York City",
    street: "Broadway",
    houseNumber: "456",
    zipCode: "10001",
    cardNumber: 76757656,
    userId: "xyz789",
    lat: 40.7128,
    lng: -74.006,
    favorite: true,
  },
  {
    title: "Sunshine Gym",
    subtitle: "Fitness Center",
    description:
      "We provide state-of-the-art facilities and expert trainers for all your fitness needs.",
    phone: "555-123-4567",
    email: "info@sunshinegym.com",
    web: "https://www.sunshinegym.com",
    imageUrl:
      "https://southsidegym.ie/wp-content/uploads/2022/05/Untitled-design-2_11zon.jpg",
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
    favorite: true,
  },
  {
    title: "Green Thumb Nursery",
    subtitle: "Plant Store",
    description:
      "We offer a wide selection of indoor and outdoor plants, gardening tools, and expert advice.",
    phone: "222-333-4444",
    email: "info@greenthumbnursery.com",
    web: "https://www.greenthumbnursery.com",
    imageUrl:
      "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/7933687/6295a51a-19e0-4979-9a97-5b4db604f6b5.jpg",
    imageAlt: "Green Thumb Nursery Logo",
    state: "California",
    country: "United States",
    city: "San Francisco",
    street: "Garden Street",
    houseNumber: "321",
    zip: "94102",
    cardNumber: 87234765,
    userId: "green321",
    lat: 37.7749,
    lng: -122.4194,
    favorite: false,
  },
  {
    title: "Pizza Italia",
    subtitle: "Italian Restaurant",
    description:
      "Experience authentic Italian cuisine with our handcrafted pizzas and pasta dishes.",
    phone: "999-888-7777",
    email: "info@pizzaitalia.com",
    web: "https://www.pizzaitalia.com",
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/eauclaire/Johnny-s-Pizza-Shop2-d930d3e25056a36_d930d4f1-5056-a36a-068ca787d55dd265.jpg",
    imageAlt: "Pizza Italia Logo",
    state: "New Jersey",
    country: "United States",
    city: "Jersey City",
    street: "Italian Avenue",
    houseNumber: "987",
    zipCode: "07306",
    cardNumber: 2735679,
    userId: "pizza987",
    lat: 40.7178,
    lng: -74.0431,
    favorite: false,
  },
];

const initializProjFunc = async () => {
  const allcards = await Card.find({});
  if (allcards.length <= 0) {
    Card.create(businesses);
  }
};

initializProjFunc();