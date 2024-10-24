import React, { Component } from "react";
import { ListStatistics } from "./Statistics.styled";
import Notification from "../Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return good > 0 || neutral > 0 || bad > 0 ? (
    <ListStatistics>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </ListStatistics>
  ) : (
    <Notification message="There is no feedback" />
  );
};
export default Statistics;
