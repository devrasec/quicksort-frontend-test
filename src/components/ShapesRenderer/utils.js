export const drawPoint = (ctx, location) => {
  ctx.fillStyle = '#ff0000';
  ctx.beginPath();
  ctx.arc(location.x, location.y, 5.5, 0, 2 * Math.PI);
  ctx.fill();
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
