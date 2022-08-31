const chars = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ', '\r\\   ','\r|   '];

let delay = 100;

const spin = (char, delay) => {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
};

for (let char of chars) {
  spin(char, delay);
  delay += 200;
};