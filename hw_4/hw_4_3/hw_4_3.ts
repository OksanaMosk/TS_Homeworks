function cylinderSquare(radius: number, height: number): number {
  return 2 * Math.PI * radius * (radius + height);
}
console.log(cylinderSquare(2, 3));
