export const drawPoint = (ctx, location) => {
  ctx.fillStyle = '#ff0000';
  ctx.beginPath();
  ctx.arc(location.x, location.y, 5.5, 0, 2 * Math.PI);
  ctx.fill();
};
