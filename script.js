// function showCalculator() {
//     document.getElementById('product-content').style.display = 'none';
//     document.getElementById('calculator-section').style.display = 'block';
// }

// function hideCalculator() {
//     document.getElementById('calculator-section').style.display = 'none';
//     document.getElementById('product-content').style.display = 'block';
// }

// function calculatePrice() {
//     const cameraCount = parseInt(document.getElementById('camera-count').value) || 8;
    
//     // Update camera quantities
//     document.getElementById('camera-qty').textContent = cameraCount;
//     document.getElementById('install-qty').textContent = cameraCount;
    
//     // Calculate prices
//     const cameraMinPrice = cameraCount * 3000;
//     const cameraMaxPrice = cameraCount * 3500;
//     const installationPrice = cameraCount * 600;
    
//     // Update display
//     document.getElementById('camera-total').textContent = `₹${cameraMinPrice.toLocaleString()} - ₹${cameraMaxPrice.toLocaleString()}`;
//     document.getElementById('install-total').textContent = `₹${installationPrice.toLocaleString()}`;
    
//     // Calculate total
//     const totalMin = cameraMinPrice + 6000 + 5000 + 7000 + installationPrice;
//     const totalMax = cameraMaxPrice + 7000 + 6000 + 9000 + installationPrice;
    
//     document.getElementById('total-price').textContent = `₹${totalMin.toLocaleString()} - ₹${totalMax.toLocaleString()}`;
// }

// function requestQuote() {
//     const cameraCount = document.getElementById('camera-count').value;
//     window.location.href = `tel:+918102614395`;
// }

// // Initialize calculator on page load
// document.addEventListener('DOMContentLoaded', function() {
//     calculatePrice();
// });
