if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((registrado) => console.log('Installed correctly...', registrado))
    .catch((error) => console.log('Failed installation...', error));
} else {
  console.log("You can't use the serviceWorker in your browser");
}
