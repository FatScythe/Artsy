import { useContext, createContext, useRef, useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";
const ArtsyContext = createContext();

const ArtsyProvider = ({ children }) => {
  const footerContainer = useRef(null);
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

  return (
    <ArtsyContext.Provider
      value={{
        footerContainer,
        products,
        drops,
        auction,
        size,
        currentNumber,
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
