import { useEffect, useState } from "react";

export default function useFetchAuth(url) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("user");

    const fetchData = async () => {
      const response = await fetch("http://localhost:8080" + url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "content-type": "application/json",
        },
      });
      const datas = await response.json();
      setData(datas);
      setIsLoaded(true);
    }
    fetchData();
  }, [url])

  return { data, isLoaded }
}
