import React from "react";
import NameList from "./NameList";

const favorites = ({ names, favorites, setFavorites }) => {
  const favoriteNames = names.filter((data) => favorite.includes(data.id));
  const removeFavNames = (id) => {
    setFavorite(favorite.filter((item) => item !== id));
  };

  return (
    <div className="favorite">
      <h4> Click on your choice of names to add to your favorite </h4>
      <NameList nameList={favoriteNames} onNameClick={removeFavNames} />
    </div>
  );
};

export default favorites;
