function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (let i = 0; i < currencyValues.length; i++) {
    let result = sumUAH / currencyValues[i].value;

    console.log(
      `Курс: ${currencyValues[i].value} UAH / 1 ${exchangeCurrency} - ${result} ${exchangeCurrency}`
    );
    return result;
  }
}

exchange(10000, [{ currency: "USD", value: 25 }], "USD");
exchange(10000, [{ currency: "EUR", value: 42 }], "EUR");
