export const convertPLNToPLN = (PLN) => {

  if (typeof(PLN) === "string" || PLN === '') { 
    return NaN; 
  }

  if (typeof(PLN) !== "number") { 
    return "Error"; 
  }  

  if (PLN < 0 ) { 
    return "Wrong value…";
  } 
 
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(PLN).replace(/\u00a0/g, ' ');
}