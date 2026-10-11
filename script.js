let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

function amountInRegister() {
  let totalAmountInRegister = 0
  for (let i = 0; i < cid.length; i++) {
    //console.log(cid[i][1]);
    totalAmountInRegister += cid[i][1];
  }
  //console.log(totalAmountInRegister);
  return(totalAmountInRegister);
}

function payment(customerMoney) {
    //for (let i = 0; i < cid.length;)
    if(customerMoney < price) {
      console.log("Customer does not have enough money to purchase the item");
    } 
    else if(customerMoney > amountInRegister()) {
      console.log("INSUFFICIENT_FUNDS");
    } 
    else {
      let change = customerMoney - price;
      console.log(change);
      //split number before and after decimal point
      //if can be divided then divide to find out how much change, if not total change start else statement again
      // loop through in till change is zero
      if(change % 100 === 0) {
        console.log("100");
      }
      else if (change % 20 === 0) {
        console.log("20");
      }
      else if (change % 10 === 0) {
        console.log("10");
      }
      else if (change % 5 === 0) {
        console.log("5");
      }
      else if (change % 1 === 0) {
        console.log("1");
      }
      else if (change % 0.25 === 0) {
        console.log("0.25");
      }
      else if (change % 0.10 === 0) {
        console.log("0.10");
      }
      else if (change % 0.05 === 0) {
        console.log("0.05");
      }
      else if (change % 0.01 === 0) {
        console.log("0.01");
      }
    }
    //minimum payment and maximum payment
    //for maximum payment add up all cid values 
    //loop through input
}
function calculateChange(customerMoney) {
  //function to split number into whole and decimal to calculate change
  //split change up not their input, calculate change before split decimal
    //let wholeNumber = Math.floor(customerMoney);
    //let decimalNumber = (customerMoney - wholeNumber).toFixed(2);
    /*let customerChange = customerMoney - price;
    //console.log(customerChange);
    let wholeNumber = Math.floor(customerChange);
    let decimalNumber = (customerChange - wholeNumber).toFixed(2);
    console.log(wholeNumber);
    console.log(decimalNumber);
    console.log("Your change is: " + "$" + customerChange.toFixed(2));
    //instead of remainder 0 do if less than
    if (wholeNumber >= 100) {

    } 
    else if(wholeNumber >= 5) {
      console.log("5");
      wholeNumber -= 5;
      if(wholeNumber >= 1) {

      }
    }*/
   let customerChange = Math.round(customerMoney * 100) - Math.round(price * 100);
   console.log(customerChange);
   while(customerChange >= 10000) {
    customerChange -= 10000;
   }
   while(customerChange >= 2000) {
    customerChange -= 2000;
   }
   while(customerChange >= 1000) {
    customerChange -= 1000;
   }
   while(customerChange >= 500) {
    customerChange -= 500;
   }
   while(customerChange >= 100) {
    customerChange -= 100;
   }
   while(customerChange >= 25) {
    customerChange -= 25;
   }
   while(customerChange >= 10) {
    customerChange -= 10;
   }
   while(customerChange >= 5) {
    customerChange -= 5;
   }
   while(customerChange >= 1) {
    customerChange -= 1;
   }   
   console.log(customerChange);
  }

  


calculateChange(7.6);
//payment(4);
//amountInRegister();