import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Home = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData(result);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Run the effect only once when the component mounts

  return (
    <div>
      {userData ? (
        <h1>Hello, {user.username}!</h1>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
export default Home;
