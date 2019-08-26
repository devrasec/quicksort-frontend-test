import React, { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { drawPoint } from './utils';

export const ShapesRenderer = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);

  const handleCanvasClick = e => {
    const { current: canvas } = canvasRef;

    if (points.length < 3 && canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const point = {
        x: e.clientX,
        y: e.clientY
      };

      drawPoint(ctx, point);

      setPoints(prevPoints => [...prevPoints, point]);
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
