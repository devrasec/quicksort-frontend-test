import React from 'react';
import styled from 'styled-components/macro';

const PointList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`;
const Point = styled.li`
  list-style: none;
  margin-bottom: 5px;
`;

export const PointsInfo = ({ points }) => {
  return (
    <>
      <h3
        css={`
          margin-top: 0;
          margin-bottom: 10px;
        `}
      >
        Points coordinates
      </h3>
      <PointList>
        {points.map((point, index) => (
          <Point key={`point-${point.x}-${point.y}`}>
            Point {index + 1}: ({point.x}, {point.y})
          </Point>
        ))}
      </PointList>
    </>
  );
};
