export const convertUSDToPLN = (USD) => {

  if (typeof(USD) === "string" || USD === '') { 
    return NaN; 
  }

  if (typeof(USD) !== "number") { 
    return "Error"; 
  }  

  if (USD < 0 ) { 
    return "Wrong value…"; 
  } 
  
  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}