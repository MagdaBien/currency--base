export const convertPLNToUSD = (PLN) => {

  if (typeof(PLN) === "string" || PLN === '') { 
    return NaN; 
  }

  if (typeof(PLN) !== "number") { 
    return "Error"; 
  }  

  if (PLN < 0 ) { 
    return "Wrong value…";
  } 

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}