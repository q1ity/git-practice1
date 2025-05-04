const axios = require("axios");
const xml2js = require("xml2js");

async function fetchCurrency() {
  const url = "https://www.cbr.ru/scripts/XML_daily.asp";
  const response = await axios.get(url);
  const result = await xml2js.parseStringPromise(response.data);
  const usd = result.ValCurs.Valute.find((v) => v.CharCode[0] === "USD");
  console.log("Курс доллара: ${usd.Value[0]} руб.");
}

fetchCurrency();
