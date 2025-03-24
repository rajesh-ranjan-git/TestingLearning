type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  email: string;
};

type UserReport = {
  id: number;
  fullName: string;
  contact: string;
  category: "Senior" | "Junior";
};

export default function generateUserReport(users: User[]): UserReport[] {
  return users
    .filter((user) => user.isActive === true)
    .map((user) => ({
      id: user.id,
      fullName: user.name.toUpperCase(),
      contact: user.email,
      category: user.age > 28 ? "Senior" : "Junior",
    }));
}

const user1: User = {
  id: 1,
  name: "Rajesh Ranjan",
  age: 28,
  isActive: true,
  email: "rajesh@gmail.com",
};

const user2: User = {
  id: 2,
  name: "Kripanidhan",
  age: 28,
  isActive: true,
  email: "kripanidhan@gmail.com",
};

const user3: User = {
  id: 3,
  name: "Sayantanee Mohanta",
  age: 29,
  isActive: true,
  email: "sayantanee@gmail.com",
};

const user4: User = {
  id: 4,
  name: "Rahee",
  age: 29,
  isActive: true,
  email: "rahee@gmail.com",
};

console.log(generateUserReport([user1, user2, user3, user4]));
