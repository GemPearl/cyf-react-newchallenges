import React from "react";
import NameList from "./NameList";

const babyNames = ({
  babyNamesData,
  searchVA1,
  favorite,
  setFavorite,
  gender,
}) => {
  const filterNames = babyNamesData
    .filter((data) => data.name.toLowerCase().includes(searchVa1.toLowerCase()))
    .filter((data) => !favorite.includes(data.id))
    .filter((data) => (gender ? data.sex === gender : true));

  const handleFavorite = (id) => {
    setFavorite([...favorite, id]);
  };

  return (
    <div>
      {" "}
      <hr />
      <NameList nameList={filterNames} onNameClick={handleFavorite} />
    </div>
  );
};

export default babyNames;
