// Envía un mensaje al contenedor principal indicando que el mensaje es visible
parent.postMessage({ messageVisible: true }, "*");

// Envía un mensaje al contenedor principal indicando que el mensaje no es visible
parent.postMessage({ messageVisible: false }, "*");
