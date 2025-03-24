type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  email: string;
};

function processUsers(users: User[]): any {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      let userDetails = {
        id: users[i].id,
        fullName: users[i].name.toUpperCase(),
        contact: users[i].email,
        category: users[i].age > 30 ? "Senior" : "Junior",
      };
      result.push(userDetails);
    }
  }
  console.log("Processed Users:", result);
  return result;
}
