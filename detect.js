// Enviar un mensaje al iframe
var iframe = document.getElementById('web-content');

iframe.contentWindow.postMessage('¿Hay texto?', 'https://socialstream.ninja');
