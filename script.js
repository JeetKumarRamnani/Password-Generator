const passwordText = document.querySelector("#passwordText");
const generateBtn = document.querySelector("#generateBtn");
const rangeEl = document.querySelector("input[type='range']");
const rangeValue = document.querySelector("#rangeValue");

generateBtn.addEventListener("click", () => {
  const alphabetsArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const rangeValue = rangeEl.value;
  console.log(rangeValue);
  const passwordLength = Math.floor(+rangeValue + Math.random());
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    console.log(Math.floor(Math.random() * alphabetsArr.length));
    randomPassword +=
      alphabetsArr[Math.floor(Math.random() * alphabetsArr.length)];
  }
  console.log(randomPassword);
  console.log(passwordLength);
  passwordText.value = randomPassword;
});

rangeEl.addEventListener("input", showRange);

function showRange(e) {
  console.log("sss");
  rangeValue.innerText = e.target.value;
}
