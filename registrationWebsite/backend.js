// backend.js

window.onload = function() {
    alert('Backend script loaded!');
    writeToLocalStorage('information', { message: 'Hello, World!' });
    writeToLocalStorage('identifiers', { message: 'Hello, World!' });
};

function writeToLocalStorage(key, data) {
    if (localStorage.getItem(key)) {
        let existingData = JSON.parse(localStorage.getItem(key));
        existingData.push(data);
        localStorage.setItem(key, JSON.stringify(existingData));
    } else {
        let newData = [data];
        localStorage.setItem(key, JSON.stringify(newData));
    }
}
