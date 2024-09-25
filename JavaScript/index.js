// Blog Page Connection
const blogBtn = document.getElementById('blog-btn');
if (blogBtn) {
  blogBtn.addEventListener('click', function () {
    window.location.href = 'blog.html';
  });
}

const homeBtn = document.getElementById('home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

// Validation Common Function
function isValidDonation(donationAmount, currentBalance) {
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount");
    return false;
  }
  if (donationAmount > currentBalance) {
    alert("Insufficient balance for this donation.");
    return false;
  }
  return true;
}

// Donation Card ---> 1
document
  .getElementById("donate-btn-1")
  .addEventListener("click", function () {
    const balanceElem = parseFloat(document.getElementById("balance").innerText);
    const donateField1 = parseFloat(document.getElementById("donate-field-1").value);
    const donateBalanceElem = parseFloat(
      document.getElementById("donate-balance-1").innerText);
    if (isValidDonation(donateField1, balanceElem)) {
      document.getElementById("balance").innerText = balanceElem - donateField1;
      document.getElementById("donate-balance-1").innerText = donateBalanceElem + donateField1;
      addToHistory('United Way, USA', donateField1);
    }
  });

// Donation Card ---> 2
document
  .getElementById("donate-btn-2")
  .addEventListener("click", function () {
    const balanceElem = parseFloat(document.getElementById("balance").innerText);
    const donateField2 = parseFloat(
      document.getElementById("donate-field-2").value);
    const donateBalanceElem = parseFloat(
      document.getElementById("donate-balance-2").innerText);
    if (isValidDonation(donateField2, balanceElem)) {
      document.getElementById("balance").innerText = balanceElem - donateField2;
      document.getElementById("donate-balance-2").innerText =
        donateBalanceElem + donateField2;
      addToHistory('Feeding America, USA', donateField2);
    }
  });

// Donation Card ---> 3
document
  .getElementById('donate-btn-3')
  .addEventListener('click', function () {
    const balanceElem = parseFloat(document.getElementById('balance').innerText);
    const donateField3 = parseFloat(document.getElementById('donate-field-3').value);
    const donateBalanceElem = parseFloat(
      document.getElementById('donate-balance-3').innerText);
    if (isValidDonation(donateField3, balanceElem)) {
      document.getElementById('balance').innerText = balanceElem - donateField3;
      document.getElementById('donate-balance-3').innerText = donateBalanceElem + donateField3;
      addToHistory('Habitat for Humanity, USA', donateField3);
    }
  });

// History 
function addToHistory(organization, amount) {
  const historyContainer = document.getElementById('history-container');
  const historyItem = document.createElement('div');
  historyItem.classList.add("border", "border-gray-300", "rounded-lg", "p-4", "mb-4", "shadow-sm");
  const historyContent = `
        <h2 class="text-lg font-bold">${amount} Dollar is Donated for ${organization}</h2>
        <p class="text-gray-500">Date: ${new Date().toLocaleString('en-US', { timeZone: 'America/Detroit', timeZoneName: 'short' })} (USA Standard Time)</p>
    `;
  historyItem.innerHTML = historyContent;
  historyContainer.appendChild(historyItem);
}

// Donation & History Functionality
document
  .getElementById('btn-history')
  .addEventListener('click', function () {
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
  });

document
  .getElementById('btn-donation')
  .addEventListener('click', function () {
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
  });

// End!!!!