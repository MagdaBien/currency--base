export const convertUSDToUSD = (USD) => {

    if (typeof(USD) === "string" || USD === '') { 
      return NaN; 
    }
  
    if (typeof(USD) !== "number") { 
      return "Error"; 
    }  
  
    if (USD < 0 ) { 
      return "Wrong value…"; 
    } 
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(USD).replace(/\u00a0/g, ' ');
  }