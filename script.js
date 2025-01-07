// JavaScript for Menu Interaction

// Function to show a popup with item details
function showItemDetails(itemName, itemPrice) {
  alert(`You selected: ${itemName}\nPrice: ₹${itemPrice}`);
}

// Function to calculate total price
function calculateTotal() {
  const selectedItems = document.querySelectorAll('.selected');
  let total = 0;

  selectedItems.forEach(item => {
    const price = parseInt(item.getAttribute('data-price'), 10);
    total += price;
  });

  alert(`Total Price: ₹${total}`);
}

// Add event listeners to menu items
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-section li');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemName = item.textContent.split(' - ')[0];
      const itemPrice = item.getAttribute('data-price');

      // Toggle selection
      item.classList.toggle('selected');
      showItemDetails(itemName, itemPrice);
    });
  });

  // Add functionality to "Calculate Total" button
  const totalButton = document.getElementById('calculate-total');
  totalButton.addEventListener('click', calculateTotal);
});
