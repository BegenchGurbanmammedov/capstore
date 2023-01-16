import React from "react";
import "../categoryItem/CategoryItem.scss";
import "./Directory.scss";

import CategoryItemComponent from "../categoryItem/CategoryItemComponent";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItemComponent category={category} key={category.id}/>
      ))}
    </div>
  );
};

export default Directory;
