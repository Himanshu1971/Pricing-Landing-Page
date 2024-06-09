// document.addEventListener("DOMContentLoaded", function() {
//     const currencySelector = document.getElementById("currency");
//     const pricingCols = document.querySelectorAll(".pricing-col");

//     currencySelector.addEventListener("change", function() {
//         const selectedCurrency = currencySelector.value;
//         const exchangeRate = parseFloat(currencySelector.options[currencySelector.selectedIndex].dataset.rate);

//         pricingCols.forEach(col => {
//             const basePrice = parseFloat(col.dataset.usd);
//             const convertedPrice = (basePrice * exchangeRate).toFixed(2);
//             col.querySelector('.price').innerHTML = 
//                 selectedCurrency === 'USD' 
//                 ? `$${convertedPrice}` 
//                 : `${convertedPrice} ${selectedCurrency}`;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const currencySelector = document.getElementById("currency");
    const pricingCols = document.querySelectorAll(".pricing-col");
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
    };

    currencySelector.addEventListener("change", function() {
        const selectedCurrency = currencySelector.value;
        const exchangeRate = parseFloat(currencySelector.selectedOptions[0].dataset.rate);
        const currencySymbol = currencySymbols[selectedCurrency] || selectedCurrency;
        pricingCols.forEach(col => {
            const basePriceUSD = parseFloat(col.dataset.usd);
            const convertedPrice = (basePriceUSD * exchangeRate).toFixed(2);
            col.querySelector('.price').innerHTML = 
                selectedCurrency === 'USD' 
                ? `${currencySymbol}${convertedPrice}<span>/month</span>` 
                : `${convertedPrice} <span class="currency-code">${currencySymbol}</span><span>/month</span>`;
        });
    });
});
