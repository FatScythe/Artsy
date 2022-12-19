import { useState, useEffect } from "react";

const UseFetch = (URL) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
  }, [URL]);

  return { data, isLoading, isError };
};

export default UseFetch;
