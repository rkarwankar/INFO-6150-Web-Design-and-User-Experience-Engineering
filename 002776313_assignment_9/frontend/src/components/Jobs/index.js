import React from "react";
import { jobsData } from "../../constants/data";
import Card from "../Card";
import JobsItem from "./JobsItem";

const Jobs = () => {
  return (
    <div>
      Jobs
      <Card text="Jobs Page" />
      {jobsData.map((item) => (
        <JobsItem item={item} key={item?.email} />
      ))}
    </div>
  );
};

export default Jobs;
