export default function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}
