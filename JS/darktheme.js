const toggleButton = document.querySelector('.fa-moon'); // Select the toggle button
const eventDetails = document.querySelector('.event-details'); // Select the event-details section
const eventHeading = document.querySelector('.event-heading'); // Select the event-heading section
const eventDetailsContentMain = document.querySelector('.event-details-content-main'); // Select the event-details-content-main section

// Add a click event listener to toggle the dark theme
toggleButton.addEventListener('click', function () {
    if (eventDetails.classList.contains('dark')) {
        eventDetails.classList.remove('dark'); // Remove the dark class
        eventHeading.classList.remove('dark'); // Remove the dark class
        eventDetailsContentMain.classList.remove('dark'); // Remove the dark class
        toggleButton.classList.remove('fa-sun'); // Switch icon to moon
        toggleButton.classList.add('fa-moon');
    } else {
        eventDetails.classList.add('dark'); // Add the dark class
        eventHeading.classList.add('dark'); // Add the dark class
        eventDetailsContentMain.classList.add('dark'); // Add the dark class
        toggleButton.classList.remove('fa-moon'); // Switch icon to sun
        toggleButton.classList.add('fa-sun');
    }
});