import Client from "../Utils/httpClient";
import { useEffect, useState } from "react";

const HooksData = (endpoint, deps = []) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Client.get(endpoint)

      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    
  }, deps);

  return { data, error, loading };
};

export default HooksData;
