import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const searchHandler = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          onClick={searchHandler}
          variant="outlined"
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
        {showSearch && (
          <div className="search__container">
            <Search />
          </div>
        )}
      </div>
      {!showSearch && (
        <div className="banner__info">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>

          <Button variant="outlined">
            <Link className="explore__link" to="/search">
              Explore Nearby
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Banner;
