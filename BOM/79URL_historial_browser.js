const l = location,
      h = history,
      n = navigator;

console.log('---------------URL object (location)---------------');
//* frameworks/libraries use this
console.log('LOCATION:', l);
console.log('LOCATION ORIGIN:', l.origin);
console.log('LOCATION PROTOCOL', l.protocol);
console.log('LOCATION HOST:', l.host);
console.log('LOCATION HOSTNAME:', l.hostname);
console.log('LOCATION PORT:', l.port);
console.log('LOCATION HREF:', l.href);
console.log('LOCATION HASH:', l.hash); //frriendly routes
console.log('LACTION PATHNAME:', l.pathname);

//location.reload() //* infinite reload

console.log('---------------History Object---------------');
console.log(h);
console.log(h.length);
//h.back(1);    //* next <-
//h.forward(1); //* back ->

//h.go(-1) //* go back <- go next ->

console.log('---------------Navigator Object---------------');
console.log(n);
console.log(n.connection); //* Information about the user connection
console.log(n.geolocation);
console.log(n.mediaDevices); //* Devices as cameras, microphones
console.log(n.onLine); //* detecs is the user lost connection (false true)
console.log(n.serviceWorker); //* convert a page to a download site or PWA
console.log(n.storage); //* API's web storage
console.log(n.userAgent); //* Information about the computer of the user
console.log(n.vendor); //* Information about the browser
console.log(n.languages); //* Information about the languages

//!Deprecated 
console.log(n.mimeTypes); //* Types of formats supported by the browser
console.log(n.usb); //* detect usb devices