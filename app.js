// Placeholder data for the Crop Yield Chart (using Chart.js or similar)
const ctx = document.getElementById('yieldChart').getContext('2d');
const yieldChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Wheat', 'Rice', 'Corn', 'Soybeans'],
        datasets: [{
            label: 'Yield per hectare (kg)',
            data: [3000, 4000, 3500, 5000],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Waste Form Submission
const wasteForm = document.getElementById('wasteForm');
const wasteReport = document.getElementById('wasteReport');

wasteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const foodType = document.getElementById('foodType').value;
    const amount = document.getElementById('amount').value;

    wasteReport.innerHTML = `<p><strong>Food Type:</strong> ${foodType} <br><strong>Amount Wasted:</strong> ${amount} kg</p>`;
});
