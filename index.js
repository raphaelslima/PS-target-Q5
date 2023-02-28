function handleClick() {
  var inputValue = document.getElementById("input").value;
  var result = document.getElementById("result");
  var reverseWord = "";

  for (let count = inputValue.length - 1; count >= 0; count--) {
    reverseWord = reverseWord + inputValue[count];
  }

  return (result.innerHTML = reverseWord);
}
