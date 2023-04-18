const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) / 100 //renammed taxRate to taxAsDecimal to be more specific, added parseFloat funtion to convert tax rate persentage into a number
const taxableAmount = salary * taxAsDecimal //calculates salary x taxAsDecimal to determine taxableAmount
const afterTaxAmount = salary - taxableAmount //determines amount after tax
const rentKey = `${lodging}-${size}` //creates a string that combines lodging and size 
const rentAmount = rent[rentKey] //
const totalExpenses = expenses.food + expenses.transport + rentAmount //adds food, transport and amount to determine totalExpenses
const total = afterTaxAmount - totalExpenses
console.log(total.toFixed(2))