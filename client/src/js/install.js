const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    //store the triggered events
    window.deferredPrompt = event;


    //remove the hidden class
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    console.log('install this app')
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    console.log(promptEvent);
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    // remove the instlall button by adding hidden class back
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // console log to confirm app was installed
    console.log('APP installed successfully');
    // set deferred prompt to null
    window.deferredPrompt = null;
});