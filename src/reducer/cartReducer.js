export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return { ...state, cart: [...state.cart, { ...action.payload }] };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);

    return { ...state, cart: [...newCart] };
  }

  if (action.type === "INCREASE_ITEM") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, number: item.number + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE_ITEM") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, number: item.number - 1 };
        }
        return item;
      })
      .filter((item) => item.number !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === "UPDATE_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (acc, curr) => {
        let total = curr.price.usd;
        let amount = curr.number;
        acc.amount += amount;
        acc.total += total * amount;

        return acc;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === "LIKE") {
    return state;
  }

  throw new Error("nah you know where you see that action.type");
};
