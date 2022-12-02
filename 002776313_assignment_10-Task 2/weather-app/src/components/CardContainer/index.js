import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./index.css";
var moment = require("moment");

const CardContainer = ({ data }) => {
  return (
    <Card style={{ width: "30rem", margin: "0 4px" }}>
      <Card.Img variant="top" src={data?.icon} bsPrefix="card-img" />
      <span>{data?.weather_main}</span>
      <Card.Body>
        <Card.Title>{data?.day}</Card.Title>
        <Card.Text>Date : {moment(data?.date).format("L")}</Card.Text>
        <Card.Text>Feels Like : {data?.feels_like}</Card.Text>
        <Card.Text>Temperatur Min : {data?.temp_min}</Card.Text>
        <Card.Text>Temperatur Max : {data?.temp_max}</Card.Text>
        <Link
          to={`/hourly/${data?.day}`}
          state={{
            date: moment(data?.date).format("L"),
          }}
        >
          Hourly Forecast
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
