// List of random messages
const messages = [
    "WARNING! YOUR SYSTEM IS INFECTED! PLEASE SCAN!",
    "FOUND 7 VIRUSES! CLICK TO REMOVE!",
    "mcafee has found threats, please remove.",
    "PLEASE PLEASE REMOVE VIRUS YOU HAVE 7",
    "NORTON SUBSCRIPTION ENDING SOON."
];

// List of random icons
const icons = ['browser.png', 'mcafee.png', 'remove.png'];

// Function to send a notification
function sendNotification() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    self.registration.showNotification("Night Reminder", {
        body: randomMessage,
        icon: randomIcon
    });
}

// Listen for the Service Worker activation event
self.addEventListener('activate', event => {
    console.log('Service Worker activated.');
});

// Set up periodic notifications
self.addEventListener('install', event => {
    console.log('Service Worker installed.');
    event.waitUntil(self.skipWaiting());
});

// Listen for push events (to trigger background notifications)
self.addEventListener('push', () => {
    sendNotification();
});

// Simulate periodic notifications every 5 seconds (via setInterval-like behavior)
self.addEventListener('periodicsync', event => {
    if (event.tag === 'night-notifications') {
        event.waitUntil(sendNotification());
    }
});
