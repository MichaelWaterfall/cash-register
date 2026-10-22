const cashInput = document.getElementById("cash");
const purchaseButton = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

purchaseButton.addEventListener("click",  function() {
  console.log("Purchase button clicked!");
  const result = calculateChange(Number(cashInput.value));

  if (result === undefined) {
    return;
  }

  changeDue.textContent = `Status: ${result.status}`;
    for(let i = 0; i < result.change.length; i++) {
      changeDue.textContent += ` ${result.change[i][0]}: $${result.change[i][1]}`;
    }
});

let price = 19.5;
document.getElementById("item-price").textContent =
  `Total Price: $${price.toFixed(2)}`;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

let testCid = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0.10],
  ["QUARTER", 0],
  ["ONE", 3],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

function amountInRegister() {
  let totalAmountInRegister = 0
  for (let i = 0; i < cid.length; i++) {
    totalAmountInRegister += cid[i][1];
  }
  return(totalAmountInRegister);
}

function calculateChange(customerMoney) {
  //function to split number into whole and decimal to calculate change
  //split change up not their input, calculate change before split decimal
   if (customerMoney < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
   else if(customerMoney === price) {
    console.log("No change due - customer paid with exact cash");
    changeDue.textContent = "No change due - customer paid with exact cash";
    console.log(changeDue.textContent);
    return;
   }
      let customerChange = Math.round(customerMoney * 100) - Math.round(price * 100);

   
   let changeGiven = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
    ];

    let finalStatus = 
    {
      status: "",
      change: 0
    };
   let availableHundredDollar = Math.round(cid[8][1] * 100);
   let availableTwentyDollar = Math.round(cid[7][1] * 100);
   let availableTenDollar = Math.round(cid[6][1] * 100);
   let availableFiveDollar = Math.round(cid[5][1] * 100);
   let availableOneDollar = Math.round(cid[4][1] * 100);
   let availableQuarter = Math.round(cid[3][1] * 100);
   let availableDime = Math.round(cid[2][1] * 100);
   let availableNickel = Math.round(cid[1][1] * 100);
   let availablePenny = Math.round(cid[0][1] * 100);

   while(customerChange >= 10000 && availableHundredDollar >= 10000) {
    customerChange -= 10000;
    availableHundredDollar -= 10000;
    changeGiven[8][1] += 10000;
   }
   while(customerChange >= 2000 && availableTwentyDollar >= 2000) {
    customerChange -= 2000;
    availableTwentyDollar -= 2000;
    changeGiven[7][1] += 2000;
   }
   while(customerChange >= 1000 && availableTenDollar >= 1000) {
    customerChange -= 1000;
    availableTenDollar -= 1000;
    changeGiven[6][1] += 1000;
   }
   while(customerChange >= 500 && availableFiveDollar >= 500) {
    customerChange -= 500;
    availableFiveDollar -= 500;
    changeGiven[5][1] += 500;
   }
   while(customerChange >= 100 && availableOneDollar >= 100) {
    customerChange -= 100;
    availableOneDollar -= 100;
    changeGiven[4][1] += 100;
   }
   while(customerChange >= 25 && availableQuarter >= 25) {
    customerChange -= 25;
    availableQuarter -= 25;
    changeGiven[3][1] += 25;
   }
   while(customerChange >= 10 && availableDime >= 10) {
    customerChange -= 10;
    availableDime -= 10;
    changeGiven[2][1] += 10;
   }
   while(customerChange >= 5 && availableNickel >= 5) {
    customerChange -= 5;
    availableNickel -= 5;
    changeGiven[1][1] += 5;
   }
   while(customerChange >= 1 && availablePenny >= 1) {
    customerChange -= 1;
    availablePenny -= 1;
    changeGiven[0][1] += 1;

   }   
   return registerStatus(customerChange, changeGiven, finalStatus);
  }

function registerStatus(customerChange, changeGiven, finalStatus) {
  let totalAmountInRegister = 0;
  let finalResult = [];
  for(let i = 0; i < cid.length; i++) {
    totalAmountInRegister += Math.round(cid[i][1] * 100) - changeGiven[i][1];

  }
  for(let i = changeGiven.length - 1; i >= 0; i--) {
      if(changeGiven[i][1] > 0) {
        finalResult.push([changeGiven[i][0], changeGiven[i][1] / 100]);
      }
  }
  if(customerChange > 0) {
    console.log("Code errors here");
    finalStatus.status = "INSUFFICIENT_FUNDS";
    finalStatus.change = [];
  }
  else if(customerChange === 0 && totalAmountInRegister === 0) {
    console.log("CLOSED");
    finalStatus.status = "CLOSED";
    finalStatus.change = finalResult;
  } 
  else {
    console.log("OPEN");
    finalStatus.status = "OPEN";
    finalStatus.change = finalResult;
  }
  
  if (finalStatus.status === "OPEN") {
    finalStatus.change = finalResult;
  }
  
  console.log(finalResult);
  console.log(finalStatus);
  return finalStatus;
}  


//calculateChange(120);
//calculateChange(1.50);
//calculateChange(1.87);
//console.log(cid[8][1]);
//payment(4);
//amountInRegister();