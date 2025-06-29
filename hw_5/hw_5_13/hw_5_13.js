"use strict";
const exchange513 = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let result = sumUAH / currencyValues[i].value;
            console.log(`Курс: ${currencyValues[i].value} UAH / 1 ${exchangeCurrency} - ${result} ${exchangeCurrency}`);
            return result;
        }
    }
    return -1;
};
exchange513(10000, [{ currency: "USD", value: 40 }], "USD");
exchange513(10000, [{ currency: "EUR", value: 42 }], "EUR");
