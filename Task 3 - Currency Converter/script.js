// script.js

// Static exchange rates (as a fallback)
const staticRates = {
    USD: { EUR: 0.91, GBP: 0.79, INR: 82.65, AUD: 1.52, JPY: 146.78 },
    EUR: { USD: 1.10, GBP: 0.87, INR: 90.72, AUD: 1.67, JPY: 161.23 },
    GBP: { USD: 1.26, EUR: 1.15, INR: 104.58, AUD: 1.91, JPY: 184.52 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0096, AUD: 0.018, JPY: 1.76 },
    AUD: { USD: 0.66, EUR: 0.60, GBP: 0.52, INR: 55.05, JPY: 96.78 },
    JPY: { USD: 0.0068, EUR: 0.0062, GBP: 0.0054, INR: 0.57, AUD: 0.010 },
};

// Predefined list of country names and currency codes
const countryCurrencies = {
    USD: 'United States Dollar',
    EUR: 'Euro',
    GBP: 'British Pound Sterling',
    INR: 'Indian Rupee',
    AUD: 'Australian Dollar',
    JPY: 'Japanese Yen',
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

// Populate dropdowns with currency codes and country names
function populateDropdowns() {
    Object.entries(countryCurrencies).forEach(([code, name]) => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = (`${name} (${code}`);
        fromCurrency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = (`${name} (${code}`);
        toCurrency.appendChild(option2);
    });

    // Set default currencies
    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

// Perform conversion using static rates
convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    if (from === to) {
        resultDiv.textContent = 'Please select different currencies.';
        return;
    }

    // Perform conversion
    const rate = staticRates[from][to];
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        resultDiv.textContent = (`${amount} ${from} = ${convertedAmount} ${to}`);
    } else {
        resultDiv.textContent = 'Conversion rate not available.';
    }
});

// Populate dropdown menus on page load
populateDropdowns();