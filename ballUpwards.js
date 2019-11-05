function ballUpwards(velocityInitial) {
  const velocityInMetres = velocityInitial / 3.6;
  let resultantTime = 0;
  let heightsMetric = [];
  for (let time = 0; time <= 20; time++) {
    heightsMetric.push(
      (velocityInMetres * time) / 10 - (((0.5 * 9.81 * time) / 10) * time) / 10
    );
  }
  return heightsMetric;
  // return null;
}

console.log(ballUpwards(15));
