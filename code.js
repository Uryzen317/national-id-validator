let feed = 7731689951;
let reversedFeed = [];
let sum = 0;

feed = feed.toString().split("");

feed.map((f, index, self) => {
  reversedFeed.push(self[self.length - index - 1]);
});

const controlNumber = Number(reversedFeed[0]);
reversedFeed.shift();

reversedFeed.map((rf, index) => {
  sum += Number(rf) * (index + 2);
});

const sumByEleven = sum % 11 < 2 ? sum % 11 : 11 - (sum % 11);

console.log(sumByEleven === controlNumber);
