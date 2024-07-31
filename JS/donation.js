const donationForm = document.getElementById('donationForm');

donationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('donorName').value;
    const email = document.getElementById('donorEmail').value;
    const amount = document.getElementById('donationAmount').value;

    console.log('Donation:', { name, email, amount });

    // Add your donation logic here
    alert('Thank you for your donation!');
});
