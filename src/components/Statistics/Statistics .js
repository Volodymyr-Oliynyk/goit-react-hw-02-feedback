import React from 'react';
import { StatisticsStyled } from './StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyled>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </StatisticsStyled>
  );
};

export default Statistics;
