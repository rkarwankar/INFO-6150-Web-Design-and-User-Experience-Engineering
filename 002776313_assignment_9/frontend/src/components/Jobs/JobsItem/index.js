import React from "react";
import "./index.scss";

const JobsItem = ({ item }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{item?.jobtitle}</b>
        </h4>
        <p>{item?.location}</p>
      </div>
    </div>
  );
};

export default JobsItem;
