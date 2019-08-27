export const drawPoint = (canvasCtx, location) => {
  canvasCtx.fillStyle = '#ff0000';
  canvasCtx.beginPath();
  canvasCtx.arc(location.x, location.y, 5.5, 0, 2 * Math.PI);
  canvasCtx.fill();
};

/**
 * Return the missing point coordinates of a parallelogram given an array of 3 known coordinates.
 *
 * @param array points An array of 3 object with properties x and y
 * @see https://www.geeksforgeeks.org/find-missing-point-parallelogram/
 */
export const getMissingPoint = points => {
  if (points.length < 3) return undefined;

  const [a, b, c] = points;

  return {
    x: a.x + c.x - b.x,
    y: a.y + c.y - b.y
  };
};

export const drawParallelogram = (canvasCtx, points) => {
  canvasCtx.strokeStyle = '#0000ff';
  canvasCtx.lineWidth = 5;
  canvasCtx.lineJoin = 'round';
  canvasCtx.beginPath();
  canvasCtx.moveTo(points[0].x, points[0].y);
  canvasCtx.lineTo(points[1].x, points[1].y);
  canvasCtx.lineTo(points[2].x, points[2].y);
  canvasCtx.lineTo(points[3].x, points[3].y);
  canvasCtx.lineTo(points[0].x, points[0].y);
  canvasCtx.stroke();
};

/**
 * Return the area of the parallelogram given its four vertices
 * @see http://faculty.bard.edu/belk/math213/Determinants.pdf
 * @param array points Array of parallelogram vertices.
 */
export const getParallelogramArea = points => {
  const [a, b, c] = points;
  // Determinant of two adjacents sides of the parallelogram.
  const determinant = [[a.x - b.x, a.y - b.y], [b.x - c.x, b.y - c.y]];
  // Cross product of the determinant is equal to the area.
  return Math.abs(
    determinant[0][0] * determinant[1][1] -
      determinant[1][0] * determinant[0][1]
  );
};

export const getCenterCoords = points => {
  const sumX = sumBy(points, point => point.x);

  const sumY = sumBy(points, point => point.y);

  return {
    x: sumX / 4,
    y: sumY / 4
  };
};

export const getRadioByArea = area => {
  // The formula of the circle area is A = PI * r2
  return Math.sqrt(area / Math.PI);
};

export const drawCircle = (ctx, point, radio) => {
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(point.x, point.y, radio, 0, 2 * Math.PI);
  ctx.stroke();
};

const sumBy = (arr, getValue) => {
  if (!Array.isArray(arr)) return NaN;

  return arr.reduce((acc, current) => {
    return acc + Number(getValue(current));
  }, 0);
};
