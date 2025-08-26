const validPin = 1234
const transactionData = []

// logout button 
// document.getElementById('logout-btn').addEventListener('click', function (){})

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
  for (const form of forms) {
    form.style.display = 'none'
  }
  document.getElementById(id).style.display = 'block'
}
// function to toggle button 
 function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName('form-btn')
  for (const btn of formBtns) {
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    btn.classList.add('border-gray-300')
  }
  document.getElementById(id).classList.remove('border-gray-300')
  document
    .getElementById(id)
    .classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
 }

// add money feature
document.getElementById('btn-addMoney')
.addEventListener('click', function (e) {
  e.preventDefault()
  const bank = getInputValue('bank')
  const bankAccount = document.getElementById('bank-account').value
  const addAmount = getInputValueNumber('add-amount')
  const addPin = getInputValueNumber('add-pin')
  const totalBalance = getInnerText('totalAmount')
  const totalNewBalance = addAmount + totalBalance
  setInnerText(totalNewBalance)

  const data = {
    name: "Add Money",
    date:new Date().toLocaleDateString()
  }
  transactionData.push(data)
  if (addAmount <= 0) {
    alert('Invalid Amount')
    return
  }
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

document
  .getElementById('withdraw-button')
  .addEventListener('click', function (e) {
    e.preventDefault()
    const agentNumber = document.getElementById('agent-number').value
    const amount = getInputValueNumber('withdraw-amount')
    const withdrawPin = getInputValueNumber('withdraw-pin')
    const availableBalance = getInnerText('totalAmount')

        if (agentNumber.length < 11) {
    alert('Please Provide Valid Account Number')
    return
  }
  if (withdrawPin !== validPin) {
    alert('Please Provide Correct Pin')
    return
  }
    if (amount <=0 || amount > availableBalance) {
      alert("Invalid Amount")
      return
    }
  
    const totalnewavailableBalance = availableBalance - amount

    setInnerText(totalnewavailableBalance)
    const data = {
    name: "Cash out",
    date:new Date().toLocaleDateString()
  }
  transactionData.push(data)
  })
// transfer money section 
document
  .getElementById('sendnow-button')
  .addEventListener('click', function (e) {
    e.preventDefault()
    const userAccNumber = document.getElementById('user-acc-number').value
    const amount = getInputValueNumber('transfer-amount')
    const transferPin = getInputValueNumber('transfer-pin')
    const availableBalance = getInnerText('totalAmount')

        if (userAccNumber.length < 11) {
    alert('Please Provide Valid Account Number')
    return
  }
  if (transferPin !== validPin) {
    alert('Please Provide Correct Pin')
    return
  }
    if (amount <=0 || amount > availableBalance) {
      alert("Invalid Amount")
      return
    }
  
    const totalnewavailableBalance = availableBalance - amount
    setInnerText(totalnewavailableBalance)
    const data = {
    name: "Cash out",
    date:new Date().toLocaleDateString()
  }
  transactionData.push(data)
  })

  // paybill section 
  document
  .getElementById('bill-btn')
  .addEventListener('click', function (e) {
    e.preventDefault()
    const bill = getInputValue('bill')
    const billerAccNumber = document.getElementById('biller-acc-number').value
    const billAmount = getInputValueNumber('bill-amount')
    const billPin = getInputValueNumber('bill-pin')
    const availableBalance = getInnerText('totalAmount')

  if (billerAccNumber.length < 11) {
    alert('Please Provide Valid Account Number')
    return
  }
  if (billPin !== validPin) {
    alert('Please Provide Correct Pin')
    return
  }
  if (billAmount <=0 || billAmount > availableBalance) {
    alert("Invalid Amount")
    return
  }
  
    const totalnewavailableBalance = availableBalance - billAmount
    setInnerText(totalnewavailableBalance)
    const data = {
    name: "Pay Bill",
    date:new Date().toLocaleDateString()
  }
  transactionData.push(data)
  })

  // transaction feature 
    document.getElementById('transaction-btn').addEventListener('click',function () {

      
      const transactionContainer = document.getElementById('transaction-container')
      transactionContainer.innerText = ''

      for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML= ` 
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
          <div class=" flex items-center">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
              <img src="assets/transaction1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `
          transactionContainer.appendChild(div)

      }
    })

// toggle feature

document.getElementById('add-money-btn').addEventListener('click', function () {
  handleToggle('add-money-parent')

  handleToggleButton('add-money-btn')
})

document
  .getElementById('cashout-button')
  .addEventListener('click', function () {
    handleToggle('cash-out-parent')
    handleToggleButton('cashout-button')
  })

document
  .getElementById('transfer-money-btn')
  .addEventListener('click', function () {
    handleToggle('transfer-money-parent')
    handleToggleButton('transfer-money-btn')
  })

document.getElementById('get-bonus-btn').addEventListener('click', function () {
  handleToggle('get-bonus-parent')
  handleToggleButton('get-bonus-btn')
})

document.getElementById('pay-bill-btn').addEventListener('click', function () {
  handleToggle('pay-bill-parent')
  handleToggleButton('pay-bill-btn')
})

document
  .getElementById('transaction-btn')
  .addEventListener('click', function () {
    handleToggle('transaction-parent')
    handleToggleButton('transaction-btn')
  })


document
  .getElementById('latest-payment')
  .addEventListener('click', function () {
    handleToggle('latest-payment')
    handleToggleButton('latest-payment')
  })
