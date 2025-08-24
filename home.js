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

// add money feature 
document.getElementById('btn-addMoney').addEventListener('click', function (e) {
  e.preventDefault()
  const bank = getInputValue('bank')
  const bankAccount = document.getElementById('bank-account').value
  const addAmount = getInputValueNumber('add-amount')
  const addPin = getInputValueNumber('add-pin')

  const totalBalance = parseInt(
    document.getElementById('totalAmount').innerText
  )

  const totalNewBalance = addAmount + totalBalance

  document.getElementById('totalAmount').innerText = totalNewBalance

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

  const availableBalance = parseInt(document.getElementById('totalAmount').innerText)
  const totalnewavailableBalance = availableBalance -  amount 

  document.getElementById('totalAmount').innerText = totalnewavailableBalance
  
})



// toggle feature 

document.getElementById("add-money-btn").addEventListener("click", function () {
 document.getElementById("cash-out-parent").style.display = "none"
 document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cashout-button").addEventListener("click", function () {
document.getElementById("add-money-parent").style.display = "none"
document.getElementById("cash-out-parent").style.display = "block"
})
