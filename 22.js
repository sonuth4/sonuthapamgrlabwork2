function isBlank(input) {
    
    return !input || input.trim().length === 0;
  }
  console.log(isBlank(""));           
  console.log(isBlank("   "));        
  console.log(isBlank("Happy"));      
  console.log(isBlank(null));         
  console.log(isBlank(undefined));    
  