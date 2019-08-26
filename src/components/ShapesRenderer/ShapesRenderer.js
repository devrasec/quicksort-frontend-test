import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { drawPoint, getMissingPoint } from './utils';

export const ShapesRenderer = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);

  const addPoint = point => setPoints(prevPoints => [...prevPoints, point]);

  useEffect(() => {
    if (points.length === 3) {
      addPoint(getMissingPoint(points));
      return;
    }

    const { current: canvas } = canvasRef;

    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
      points.forEach(point => drawPoint(ctx, point));
    }
  }, [points]);

  const handleCanvasClick = e => {
    if (points.length < 3) {
      addPoint({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  return (
    <canvas
      ref={canvasRef}
      css={`
        display: block;
      `}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handleCanvasClick}
    />
  );
};
