import onboarding1 from "../assets/images/onboarding1.png";
import onboarding2 from "../assets/images/onboarding2.png";
import onboarding3 from "../assets/images/onboarding3.png";

import teaImage from "../assets/icons/tea.png";
import coffeeImage from "../assets/icons/coffee.png";
import iceBlendedImage from "../assets/icons/milk_tea.png";
import milkTeaImage from "../assets/icons/milk_tea.png";
import toppingImage from "../assets/icons/milk_tea.png";

import brewedTeaImage from "../assets/images/brewed_tea.png";
import milkTeaImageProduct from "../assets/images/brewed_tea.png";
import coffeeImageProduct from "../assets/images/brewed_tea.png";
import iceBlendedImageProduct from "../assets/images/brewed_tea.png";
import toppingImageProduct from "../assets/images/brewed_tea.png";

export const OnboardingContent = [
  {
    id: 1,
    title: "Order Directly",
    description: "Browse the menu and order directly from the application",
    image: onboarding1,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "Our courier will collect up and bring your order immediately",
    image: onboarding2,
  },
  {
    id: 3,
    title: "Pickup Delivery",
    description: "Pick up delivery at your door, enjoy the groceries",
    image: onboarding3,
  },
];

export const Categories = [
  {
    id: 1,
    name: "Brewed Tea",
    image: teaImage,
    products: [
      { id: 101, name: "Trà Nguyên Bản", priceRegular: 35, priceLarge: 40, image: brewedTeaImage },
      { id: 102, name: "Hồng Trà Chanh", priceRegular: 40, priceLarge: 45, image: brewedTeaImage },
      { id: 103, name: "Hồng Trà Đào", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 104, name: "Trà Vải Lài", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 105, name: "Trà Nhãn Sen", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 106, name: "Trà Lài Đặc Thơm", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 107, name: "Trà Lucky", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 108, name: "Trà Ô Long Dâu", priceRegular: 50, priceLarge: 55, image: brewedTeaImage },
      { id: 109, name: "Trà Ô Long Mãng Cầu", priceRegular: 50, priceLarge: 55, image: brewedTeaImage }
    ]
  },
  {
    id: 2,
    name: "Milk Tea",
    image: milkTeaImage,
    products: [
      { id: 201, name: "Trà Sữa Nguyên Bản", priceRegular: 45, priceLarge: 50, image: milkTeaImageProduct },
      { id: 202, name: "Trà Sữa Matcha", priceRegular: 45, priceLarge: 50, image: milkTeaImageProduct },
      { id: 203, name: "Trà Sữa Socola", priceRegular: 45, priceLarge: 50, image: milkTeaImageProduct },
      { id: 204, name: "Trà Sữa Nhãn Sen", priceRegular: 50, priceLarge: 55, image: milkTeaImageProduct },
      { id: 205, name: "Trà Sữa Berry Berry", priceRegular: 60, priceLarge: null, image: milkTeaImageProduct }
    ]
  },
  {
    id: 3,
    name: "Coffee",
    image: coffeeImage,
    products: [
      { id: 301, name: "Phin Đen Đá", priceRegular: 30, priceLarge: 35, image: coffeeImageProduct },
      { id: 302, name: "Phin Sữa Đá", priceRegular: 35, priceLarge: 40, image: coffeeImageProduct },
      { id: 303, name: "Bạc Xỉu", priceRegular: 35, priceLarge: 40, image: coffeeImageProduct },
      { id: 304, name: "Americano", priceRegular: 35, priceLarge: 40, image: coffeeImageProduct },
      { id: 305, name: "Cappuccino", priceRegular: 45, priceLarge: 50, image: coffeeImageProduct },
      { id: 306, name: "Latte", priceRegular: 45, priceLarge: 50, image: coffeeImageProduct },
      { id: 307, name: "Mocha", priceRegular: 50, priceLarge: 55, image: coffeeImageProduct },
      { id: 308, name: "Caramel/Vanilla Latte", priceRegular: 50, priceLarge: 55, image: coffeeImageProduct }
    ]
  },
  {
    id: 4,
    name: "Ice Blended",
    image: iceBlendedImage,
    products: [
      { id: 401, name: "Chanh Đá Xay", priceRegular: 50, priceLarge: null, image: iceBlendedImageProduct },
      { id: 402, name: "Matcha Đá Xay", priceRegular: 60, priceLarge: null, image: iceBlendedImageProduct },
      { id: 403, name: "Cà Phê Sữa Đá Xay", priceRegular: 60, priceLarge: null, image: iceBlendedImageProduct },
      { id: 404, name: "Oreo Đá Xay", priceRegular: 60, priceLarge: null, image: iceBlendedImageProduct },
      { id: 405, name: "Sữa Chua Hồng Trà Đào Đá Xay", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct },
      { id: 406, name: "Nhãn Đá Xay", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct },
      { id: 407, name: "Hồng Trà Đặc Cam Đá Xay", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct },
      { id: 408, name: "Sữa Chua Xoài Đặc Thơm", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct },
      { id: 409, name: "Sữa Chua Phúc Bồn Tử Đặc Cam", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct },
      { id: 410, name: "Sữa Chua Berry Berry", priceRegular: 70, priceLarge: null, image: iceBlendedImageProduct }
    ]
  },
  {
    id: 5,
    name: "Toppings",
    image: toppingImage,
    products: [
      { id: 501, name: "Hạt Konjac", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 502, name: "Thạch Nha Đam", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 503, name: "Phô Mai Cay", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 504, name: "Thạch Dừa", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 505, name: "Trái Cây", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 506, name: "Mứt Dâu", priceRegular: 15, priceLarge: null, image: toppingImageProduct },
      { id: 507, name: "Bánh Flan", priceRegular: 20, priceLarge: null, image: toppingImageProduct }
    ]
  }
];
