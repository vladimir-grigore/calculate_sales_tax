var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  //create the results obj to be returned
  var resultsObject = {}

  //iterate through salesData obj
  for (key in salesData) {
    //for every key of salesData get the name property
    // and add it as a key to the results obj
    resultsObject[salesData[key].name] = {};
  }

  for (key in resultsObject) {
    resultsObject[key].totalSales = calculateTotalSales(key);
    resultsObject[key].totalTaxes = calculateTotalTax(salesTaxRates, key);
  }

  //return final resultsObject
  return resultsObject;
}

//calculate totalSales
function calculateTotalSales(nameOfCompany) {
  var sales = 0;

  //loop through companySalesData
  for (index in companySalesData) {
    //check to see if you have a match in the company name
    if (companySalesData[index].name === nameOfCompany) {
      //add all values in the sales array
      sales += companySalesData[index].sales.reduce(function (a, b) {
        return a + b;
      });
    }
  }
  return sales;
}

//calculate totalTaxes
function calculateTotalTax(salesTaxRates, nameOfCompany) {
  //return salesTaxRates;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/