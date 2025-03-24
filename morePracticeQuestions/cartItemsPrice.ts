type CartItem = {
  name: string;
  price: number;
  quantity: number;
  category: string;
};

function calculateTotal(cart: CartItem[], tax: number): number {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let itemTotal = item.price * item.quantity;
    if (item.category === "electronics") {
      itemTotal += itemTotal * 0.02; // Electronics have extra 2% tax
    }
    total += itemTotal;
  }
  total += total * tax;

  console.log("Total price:", total);
  return total;
}

function calculateTotal2(cart: CartItem[], tax: number): number {
  return cart
    .map((item) =>
      item.category === "electronics"
        ? item.price * item.quantity * (1 + 0.02)
        : item.price * item.quantity
    )
    .reduce((total, price) => total + price, 0);
}

console.log(
  calculateTotal(
    [
      {
        name: "Fastrack Watch",
        price: 258,
        quantity: 2,
        category: "electronics",
      },
      {
        name: "Top",
        price: 256,
        quantity: 3,
        category: "clothes",
      },
    ],
    2
  )
);

console.log(
  calculateTotal2(
    [
      {
        name: "Fastrack Watch",
        price: 258,
        quantity: 2,
        category: "electronics",
      },
      {
        name: "Top",
        price: 256,
        quantity: 3,
        category: "clothes",
      },
    ],
    2
  )
);
