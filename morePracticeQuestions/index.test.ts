import generateUserReport from ".";
import { describe, expect, test } from "vitest";

type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  email: string;
};

describe("Test processed users", () => {
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

  test("Precessed users", () => {
    expect(generateUserReport([user1, user2, user3, user4])).toEqual([
      {
        id: 1,
        fullName: "RAJESH RANJAN",
        contact: "rajesh@gmail.com",
        category: "Junior",
      },
      {
        id: 2,
        fullName: "KRIPANIDHAN",
        contact: "kripanidhan@gmail.com",
        category: "Junior",
      },
      {
        id: 3,
        fullName: "SAYANTANEE MOHANTA",
        contact: "sayantanee@gmail.com",
        category: "Senior",
      },
      {
        id: 4,
        fullName: "RAHEE",
        contact: "rahee@gmail.com",
        category: "Senior",
      },
    ]);
  });
});
