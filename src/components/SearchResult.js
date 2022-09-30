import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import "./SearchResult.css";

const DUMMY_DATA = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
  },
  {
    img: "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
    location: "Private room in center of London",
    title: "Independent luxury studio apartment",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
    star: 4.3,
    price: "£40 / night",
    total: "£157 total",
  },
  {
    img: "https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",
    location: "Private room in center of London",
    title: "London Studio Apartments",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    star: 3.8,
    price: "£35 / night",
    total: "£207 total",
  },
];

const SearchResult = () => {
  return (
    <div className="searchResult">
      {DUMMY_DATA.map((data) => {
        return (
          <div className="searchResult__card" key={data.title}>
            <img src={data.img} alt={data.title} />
            <FavoriteIcon className="searchResult__heart" />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p>{data.location}</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <StarIcon className="searchResult__star" />
                  <p>
                    <strong>{data.star}</strong>
                  </p>
                </div>
                <div className="searchResults__price">
                  <h2>{data.price}</h2>
                  <p>{data.total}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
