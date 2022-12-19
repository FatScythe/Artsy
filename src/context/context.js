import { useContext, createContext, useRef, useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";
const ArtsyContext = createContext();

const ArtsyProvider = ({ children }) => {
  const footerContainer = useRef(null);
  const products = UseFetch(
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json"
  );

  // drops.json;
  // carousel.json
  // auction.json;

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

  return (
    <ArtsyContext.Provider
      value={{
        footerContainer,
        products,
        size,
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
