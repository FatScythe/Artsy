import {
  useContext,
  createContext,
  useRef,
  useState,
  useEffect,
  useReducer,
} from "react";
// hooks
import UseFetch from "../hooks/useFetch";
import { reducer } from "../reducer/cartReducer";

// context
const ArtsyContext = createContext();

// Gets item from LocalStorage and if doesn't exist it creates one
const getLocalStorage = () => {
  if (!localStorage.getItem("localState")) {
    let State = {
      amount: 0,
      total: 0,
      cart: [],
    };
    localStorage.setItem("localState", JSON.stringify(State));
    return;
  }
  return JSON.parse(localStorage.getItem("localState"));
};
const ArtsyProvider = ({ children }) => {
  // Initial State
  // const initialState = {
  //   amount: 0,
  //   total: 0,
  //   cart: [],
  // };

  const initialState = getLocalStorage();

  // Footer Component
  const footerContainer = useRef(null);

  // Fetch Data
  const products = UseFetch(
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json"
  );

  const drops = UseFetch(
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/drops.json"
  );

  const auction = UseFetch(
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/auction.json"
  );

  // carousel.json

  const [size, setSize] = useState(window.innerWidth);
  const [value, setValue] = useState(1);

  // Checks the size of the screen
  function changeSize() {
    // console.log("size changed");
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      // console.log("clean-up Effect");
      window.removeEventListener("resize", changeSize);
    };
  }, [size]);

  // to give CurrentIndex of an array
  const currentNumber = (array, index) => {
    const lastNumber = array.length() - 1;

    if (index > lastNumber) {
      return 0;
    }

    if (index < 0) {
      return lastNumber;
    }

    return index;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL" });
  }, [state.cart]);

  // INCREASES THE NUMBER OF AN ITEM IN CART
  const Increase = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
    setValue(value + 1);
  };

  // DECREASES THE NUMBER OF AN ITEM IN CART
  const Decrease = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
    if (value <= 1) {
      return;
    }
    setValue(value - 1);
  };

  // ADDS ITEMS TO THE CART
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // REMOVES ITEMS IN THE CART
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // LIKES ITEMS
  const likeItem = (id) => {
    dispatch({ type: "LIKE", payload: id });
  };

  return (
    <ArtsyContext.Provider
      value={{
        footerContainer,
        products,
        drops,
        auction,
        size,
        currentNumber,
        Increase,
        Decrease,
        value,
        setValue,
        addItem,
        removeItem,
        likeItem,
        ...state,
      }}
    >
      {children}
    </ArtsyContext.Provider>
  );
};

export const useGlobalArtsyContext = () => {
  return useContext(ArtsyContext);
};

export default ArtsyProvider;
