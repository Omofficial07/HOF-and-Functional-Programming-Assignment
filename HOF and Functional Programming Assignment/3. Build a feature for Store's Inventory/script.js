// Items with prices in USD
const itemsInUSD = {
    apple: 1.2,
    banana: 0.5,
    orange: 0.8,
    mango: 1.5
  };
  
  // Exchange rate (1 USD = 80 INR)
  const exchangeRate = 80;
  
  // Convert prices to INR
  const itemsInINR = Object.entries(itemsInUSD)
    .map(([item, priceInUSD]) => [item, (priceInUSD * exchangeRate).toFixed(2)]) // Convert to INR and keep 2 decimal places
    .reduce((acc, [item, priceInINR]) => {
      acc[item] = priceInINR; // Convert back to an object
      return acc;
    }, {});
  
  // Output the result
  console.log("Prices in INR:", itemsInINR);
  