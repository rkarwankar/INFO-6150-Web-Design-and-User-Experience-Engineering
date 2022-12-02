import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./index.css";
var moment = require("moment");

const HourlyContainer = ({ data, hourly }) => {
  return (
    <Card style={{ width: "30rem", margin: "0 4px" }}>
      <Card.Img variant="top" src={data?.icon} bsPrefix="card-img" />
      <span>{data?.weather_main}</span>
      <Card.Body>
        <Card.Title>{data?.day}</Card.Title>
        <Card.Text>Time : {moment(data?.date).format("LT")}</Card.Text>
        <Card.Text>Date : {moment(data?.date).format("L")}</Card.Text>
        <Card.Text>Temperature : {data?.temp}</Card.Text>
        <Card.Text>Feels Like : {data?.feels_like}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HourlyContainer;
