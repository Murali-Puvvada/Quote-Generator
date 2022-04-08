const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    "X-RapidAPI-Key":
      "c63effd728msh978adc938fefee8p15210ajsnacb694d7a5cb"
  }
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then(
    (response) => (
      (document.getElementById("quote").innerHTML = response.content),
      (document.getElementById("quoteAuthor").innerHTML =
        "-" + response.originator.name)
    )
  )
  .catch((err) => console.error(err));

function newQuote() {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then((response) => response.json())
    .then(
      (response) => (
        console.log("Called"),
        (document.getElementById("quote").innerHTML =
          response.content),
        (document.getElementById("quoteAuthor").innerHTML =
          "-" + response.originator.name)
      )
    )
    .catch((err) => console.error(err));
}
