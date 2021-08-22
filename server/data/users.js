import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Eugene",
    lastName: "Tin",
    username: "admin",
    email: "admin@example.com",
    age: "19",
    gender: "male",
    country: "MY",
    password: bcrypt.hashSync("123456", 10),
    contact: "183216766",
  },
  {
    firstName: "Hao",
    lastName: "Bin",
    username: "seller",
    email: "seller@example.com",
    age: "19",
    gender: "male",
    country: "MY",
    password: bcrypt.hashSync("123456", 10),
    contact: "183216764",
  },
  {
    firstName: "Ah",
    lastName: "Sim",
    username: "sim",
    email: "sim@example.com",
    age: "19",
    gender: "male",
    country: "MY",
    password: bcrypt.hashSync("123456", 10),
    contact: "183216765",
  },
];

export default users;
