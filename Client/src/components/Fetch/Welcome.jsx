import { useEffect, useState } from "react";
import axios from "axios";
function WelcomeSection() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FetchName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users?users_id=${1}`
        ); //change this to get the user
        setName(response.data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchName();
  }, []);
  return { name, loading };
}

export default WelcomeSection;
