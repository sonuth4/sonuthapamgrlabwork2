class Product {
    constructor(description, quantity, price) {
      if (typeof description !== 'string') {
        console.error("Description must be a string.");
      } else {
        this.description = description;
      }
  
      if (typeof quantity !== 'number' || typeof price !== 'number') {
        console.error("Quantity and price must be numbers.");
      } else {
        this.quantity = quantity;
        this.price = price;
      }
    }
  
    
    getDescription() {
      return this.description;
    }
  
    setDescription(value) {
      this.description = value;
    }
  
    
    getQuantity() {
      return this.quantity;
    }
  
    setQuantity(value) {
      this.quantity = value;
    }
  
    
    getPrice() {
      return this.price;
    }
  
    setPrice(value) {
      this.price = value;
    }
  
    
    calculatePrice() {
      return this.quantity * this.price;
    }
  }
  
  
  const product1 = new Product("Ipad", 3, 3200);
  console.log(`Description: ${product1.getDescription()}`); 
  console.log(`Quantity: ${product1.getQuantity()}`); 
  console.log(`Price: ${product1.getPrice()}`); 
  console.log(`Total Price: ${product1.calculatePrice()}`); 
  