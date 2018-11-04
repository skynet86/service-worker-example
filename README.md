# service worker example

What is Service Worker?

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync. With this script, you can track network traffic of the page, manage push notifications and develop "offline first" web applications.

Things to be consider:
* With service worker we don't have access to Window object therefore no direct access to DOM.
* We can not run service worker on HTTP port 80. (During development we can use localhost)

More at - https://medium.com/@bhargavshah2011/overview-of-web-worker-service-worker-56082720dcd0
