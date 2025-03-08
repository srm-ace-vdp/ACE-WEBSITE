document.addEventListener('DOMContentLoaded', function () {
    const eventName = getEventNameFromURL();
    fetchEventData(eventName);
});

function getEventNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('event');
}

function fetchEventData(eventName) {
    const jsonURL = 'https://raw.githubusercontent.com/srmacevdp/assets/main/JSON/event-details.json';
    
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            const eventData = data.find(event => event.name.toLowerCase() === eventName.toLowerCase());
            if (eventData) {
                populateEventDetails(eventData);
            } else {
                showErrorMessage();
            }
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
            showErrorMessage();
        });
}

function populateEventDetails(eventData) {
    document.title = `${eventData.name} - Event Details`;
    document.getElementById('event-title').textContent = eventData.name;
    
    // Add event image
    const imageElement = document.createElement('img');
    imageElement.src = eventData.image;
    imageElement.alt = eventData.name;
    imageElement.className = 'img-fluid';
    document.getElementById('event-image').appendChild(imageElement);
    
    document.getElementById('event-description').innerHTML = `<p>${eventData.description}</p>`;

    let detailsHTML = `
        <h3>Event Details</h3>
        <p><strong>Date:</strong> ${eventData.date}</p>
        <p><strong>Time:</strong> ${eventData.time}</p>
        <p><strong>Venue:</strong> ${eventData.venue}</p>
        <p><strong>Registration Fee:</strong> ${eventData.fee}</p>
    `;

    if (eventData.rules && eventData.rules.length > 0) {
        detailsHTML += `
            <h3>Rules and Regulations:</h3>
            <ul>
                ${eventData.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
        `;
    }

    if (eventData.speakers && eventData.speakers.length > 0) {
        detailsHTML += `
            <h3>Speakers:</h3>
            <ul>
                ${eventData.speakers.map(speaker => `<li>${speaker.name} - ${speaker.title}</li>`).join('')}
            </ul>
        `;
    }

    if (eventData.topics && eventData.topics.length > 0) {
        detailsHTML += `
            <h3>Topics:</h3>
            <ul>
                ${eventData.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        `;
    }

    document.getElementById('event-details-content').innerHTML = detailsHTML;
    document.getElementById('register-link').href = eventData.registrationLink;

    // Populate contact information
    if (eventData.contactPerson && eventData.contactPerson.length > 0) {
        const contactInfo = document.getElementById('contact-info');
        contactInfo.innerHTML = eventData.contactPerson.map(contact => `
            <div class="email">
                <i class="bi bi-person-badge-fill"></i>
                <h4>Name:</h4>
                <p>${contact.name}</p>
            </div>
            <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>${contact.phone}</p>
            </div>
        `).join('');
    }
}

function showErrorMessage() {
    document.getElementById('main').innerHTML = `
        <div class="container">
            <h2>Event Not Found</h2>
            <p>Sorry, we couldn't find the event you're looking for. Please check the URL and try again.</p>
        </div>
    `;
}