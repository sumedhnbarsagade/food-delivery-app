import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RestaurantCards from "./components/RestaurantCards";
import resList from "./utils/MockData";

function App() {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="filter">
          <button
            className="filter-name"
            onClick={()=> {
              const filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
              setRestaurantList(filteredList);
            }}

          >
            Top rated restaurant
          </button>
        </div>
        <div className="food-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCards key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
