import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => { 
    navigate("/");
  }
  return (
    <div>
      <p>your logged in!</p>
      <button onClick={handleButtonClick}>Go to Home</button>
    </div>
  );
};

export default Home;
