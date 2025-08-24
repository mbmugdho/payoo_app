const validPin = 1234

// function to get multiple input values in one line 
function getInputValueNumber(id) {
  const inputField = document.getElementById(id)
  const inputFieldValue = inputField.value
  const inputFieldValueNumber = parseInt(inputFieldValue)
  return inputFieldValueNumber
} 
function getInputValue(id) {
  const inputField = document.getElementById(id)
  const inputFieldValue = inputField.value
  return inputFieldValue
}

// function to get innertext 
function getInnerText(id) {
  const element = document.getElementById(id)
  const elementValue = element.innerText
  const elementValueNumber = parseInt(elementValue)
  return elementValueNumber
}
// function to set innertext 

function setInnerText(value) {
  const availableBalanceElement = document.getElementById('totalAmount')
  availableBalanceElement.innerText = value
}
// function to toggle 
function handleToggle(id) {
  const forms = document.getElementsByClassName('form')
 for(const form of forms){
  form.style.display = "none"
  }
  document.getElementById(id).style.display = "block"
}

// add money feature 
document.getElementById('btn-addMoney').addEventListener('click', function (e) {
  e.preventDefault()
  const bank = getInputValue('bank')

  const bankAccount = document.getElementById('bank-account').value

  const addAmount = getInputValueNumber('add-amount')

  const addPin = getInputValueNumber('add-pin')

  const totalBalance = getInnerText('totalAmount')

  const totalNewBalance = addAmount + totalBalance

  setInnerText(totalNewBalance)

  if (bankAccount.length < 11) {
    alert('Please Provide Valid Account Number')
    return
  }
  if (addPin !== validPin) {
    alert('Please Provide valid pin')
    return
  }
  // console.log(bank, bankAccount, addAmount, addPin)
  // console.log(totalBalance)
})

// Cashout money feature

document.getElementById('withdraw-button').addEventListener('click',function (e) {
  e.preventDefault()
  const amount = getInputValueNumber('withdraw-amount')

  const availableBalance = getInnerText('totalAmount')
  const totalnewavailableBalance = availableBalance -  amount 

  setInnerText(totalnewavailableBalance) 
  
})



// toggle feature 

document.getElementById("add-money-btn").addEventListener("click", function () {
  handleToggle('add-money-parent')
})

document.getElementById("cashout-button").addEventListener("click", function () {
 handleToggle('cash-out-parent')
})

document.getElementById("transfer-money-btn").addEventListener("click", function () {
  handleToggle('transfer-money-parent')
})

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  handleToggle('get-bonus-parent')
})

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle('pay-bill-parent')
})

document.getElementById("transaction-btn").addEventListener("click", function () {
  handleToggle('transaction-parent')
})
