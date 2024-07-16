document.getElementById('sell-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sell coupon form submitted!');
    // Add your form submission logic here
});

document.getElementById('swap-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Swap coupon form submitted!');
    // Add your form submission logic here
});

document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profile form submitted!');
    // Add your profile update logic here
});

// Dummy data for available coupons
const coupons = [
    { title: "10% Off at Store A", description: "Get 10% off your next purchase at Store A.", price: 5, expiration: "2024-12-31", type: "sell" },
    { title: "Buy One Get One Free at Store B", description: "BOGO on select items at Store B.", swapFor: "Any food coupon", expiration: "2024-11-30", type: "swap" },
    // Add more coupons here
];

// Function to render coupons
function renderCoupons() {
    const couponsList = document.getElementById('coupons-list');
    couponsList.innerHTML = '';
    coupons.forEach(coupon => {
        const couponDiv = document.createElement('div');
        couponDiv.className = 'coupon';
        couponDiv.innerHTML = `
            <h3>${coupon.title}</h3>
            <p>${coupon.description}</p>
            <p>Expiration Date: ${coupon.expiration}</p>
            ${coupon.type === 'sell' ? `<p>Price: $${coupon.price}</p>` : `<p>Swap For: ${coupon.swapFor}</p>`}
        `;
        couponsList.appendChild(couponDiv);
    });
}

// Render coupons on page load
document.addEventListener('DOMContentLoaded', renderCoupons);
