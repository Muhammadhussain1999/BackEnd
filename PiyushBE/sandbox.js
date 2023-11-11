const users = [
  {
    id: 1000,
    first_name: "Kata",
    last_name: "Rudall",
    email: "krudallrr@shop-pro.jp",
    gender: "Female",
    carModel: "Savana 3500",
  },
  {
    first_name: "Saad",
    last_name: "khan",
    email: "ksaad7933@gmail.com",
    gender: "Male",
    carModel: "2323",
    id: 1001,
  },
];
const id = 1001;
const user = users.find(user => user.id === id);
user.first_name = "hello world";
