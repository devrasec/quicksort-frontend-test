import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

import {
  drawPoint,
  getMissingPoint,
  drawParallelogram,
  getParallelogramArea,
  drawCircle,
  getRadioByArea,
  getCenterCoords
} from './utils';
import { PointsInfo } from '../PointsInfo';

const InfoBox = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 255, 0.5);
  padding: 16px;
  width: 200px;
  top: 0;
  right: 0;
  color: #ffffff;
`;

export const ShapesRenderer = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [area, setArea] = useState(0);
  const { current: canvas } = canvasRef;
  const isCanvasAvailable = canvas && canvas.getContext;

  const addPoint = point => setPoints(prevPoints => [...prevPoints, point]);

  useEffect(() => {
    if (points.length === 3) {
      addPoint(getMissingPoint(points));
      return;
    }

    if (isCanvasAvailable) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
      points.forEach(point => drawPoint(ctx, point));

      if (points.length === 4) {
        drawParallelogram(ctx, points);
        setArea(getParallelogramArea(points));
      }
    }
  }, [canvas, isCanvasAvailable, points]);

  useEffect(() => {
    if (points.length === 4 && area > 0) {
      if (isCanvasAvailable) {
        drawCircle(
          canvas.getContext('2d'),
          getCenterCoords(points),
          getRadioByArea(area)
        );
      }
    }
  }, [area, canvas, isCanvasAvailable, points]);

  const handleCanvasClick = e => {
    if (points.length < 3) {
      addPoint({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  return (
    <>
      <InfoBox>
        <PointsInfo points={points} />
      </InfoBox>
      <canvas
        ref={canvasRef}
        css={`
          display: block;
          background: #f1f1f1;
        `}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
    </>
  );
};
