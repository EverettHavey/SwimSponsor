// Data for all sponsors
const sponsors = [
    { name: "McDonald's", logo: "images/mcdonalds-logo.png", description: "Global fast-food giant.", sponsorshipValue: "$10M - $15M/year" },
    { name: "Coca-Cola", logo: "images/coca-cola-logo.png", description: "World's largest beverage company.", sponsorshipValue: "$12M - $18M/year" },
    { name: "O'Reilly Auto Parts", logo: "images/oreilly-logo.png", description: "Automotive parts retailer.", sponsorshipValue: "$5M - $8M/year" },
    { name: "Quick Quack Car Wash", logo: "images/quick-quack-logo.png", description: "Fast and high-quality car wash services.", sponsorshipValue: "$3M - $6M/year" },
    { name: "Blockbuster", logo: "images/blockbuster-logo.png", description: "The legendary video rental service.", sponsorshipValue: "$4M - $7M/year" },
    { name: "M&M's", logo: "images/mms-logo.png", description: "Colorful chocolate candies.", sponsorshipValue: "$9M - $14M/year" },
    { name: "HenderickCars.com", logo: "images/hendrick-logo.png", description: "Leading automotive retailer.", sponsorshipValue: "$6M - $9M/year" },
    { name: "Uber Eats", logo: "images/ubereats-logo.png", description: "Food delivery platform.", sponsorshipValue: "$8M - $12M/year" },
    { name: "Uber", logo: "images/uber-logo.png", description: "Ride-sharing service.", sponsorshipValue: "$10M - $16M/year" },
    { name: "Toyota", logo: "images/toyota-logo.png", description: "Automotive manufacturer.", sponsorshipValue: "$11M - $17M/year" },
    // Fictional Companies
    { name: "AquaFuel", logo: "images/aquafuel-logo.png", description: "Energy drinks for athletes.", sponsorshipValue: "$2M - $5M/year" },
    { name: "HydroGlide Gear", logo: "images/hydroglide-logo.png", description: "High-performance swim gear.", sponsorshipValue: "$3M - $7M/year" },
    { name: "Zenith Car Wash", logo: "images/zenith-carwash-logo.png", description: "Eco-friendly car washing.", sponsorshipValue: "$1M - $4M/year" },
    { name: "Velocity Ventures", logo: "images/velocity-logo.png", description: "Investment firm focused on sports.", sponsorshipValue: "$5M - $10M/year" },
    { name: "Neptune's Harvest", logo: "images/neptune-logo.png", description: "Seafood restaurant chain.", sponsorshipValue: "$2M - $6M/year" },
    { name: "Piranha Pool Systems", logo: "images/piranha-logo.png", description: "Swimming pool maintenance.", sponsorshipValue: "$1M - $3M/year" },
    { name: "Fathom Finance", logo: "images/fathom-logo.png", description: "Financial services for athletes.", sponsorshipValue: "$4M - $8M/year" },
    { name: "Current Casuals", logo: "images/current-logo.png", description: "Leisure wear for swimmers.", sponsorshipValue: "$3M - $6M/year" },
    { name: "SplashStream", logo: "images/splashstream-logo.png", description: "Online streaming service for swim meets.", sponsorshipValue: "$6M - $10M/year" },
    { name: "Omega Car Wash", logo: "images/omega-carwash-logo.png", description: "Premium car detailing services.", sponsorshipValue: "$2M - $5M/year" }
];

const sponsorContainer = document.getElementById('sponsorContainer');
const searchBar = document.getElementById('searchBar');

// Function to display sponsors
function displaySponsors(sponsorsToDisplay) {
    if (!sponsorContainer) return; // Exit if not on the sponsors.html page
    
    sponsorContainer.innerHTML = ''; // Clear previous content
    sponsorsToDisplay.forEach(sponsor => {
        const card = document.createElement('div');
        card.className = 'sponsor-card';
        card.innerHTML = `
            <img src="${sponsor.logo}" alt="${sponsor.name} Logo">
            <h3>${sponsor.name}</h3>
            <p>${sponsor.description}</p>
            <p><strong>Sponsorship Value:</strong> ${sponsor.sponsorshipValue}</p>
            <button onclick="alert('Applying for sponsorship with ${sponsor.name}!')">Apply</button>
        `;
        sponsorContainer.appendChild(card);
    });
}

// Check if search bar exists before adding event listener
if (searchBar) {
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSponsors = sponsors.filter(sponsor => {
            return sponsor.name.toLowerCase().includes(searchTerm) || 
                   sponsor.description.toLowerCase().includes(searchTerm);
        });
        displaySponsors(filteredSponsors);
    });
    // Initial display of all sponsors if on the sponsors page
    displaySponsors(sponsors);
}