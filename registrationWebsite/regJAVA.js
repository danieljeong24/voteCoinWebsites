const fs = require('fs');

function submitForm() {
    event.preventDefault(); // Prevents the default form submission behavior

    const name = document.getElementById('name').value;
    const ssn = document.getElementById('ssn').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    // Data to be written to information.json
    const dataToWrite = {
        name: name,
        ssn: ssn,
        dob: dob,
        address: address
    };

    // Write data to the information.json file
    writeToFile('information.json', dataToWrite);

    // Generate and add an identifier to identifiers.json file
    const identifier = generateIdentifier();
    writeToFile('identifiers.json', { identifier: identifier });

    // Display the generated identifier to the user
    alert('Data has been written to the files!');
}

// Function to write data to a JSON file
function writeToFile(filename, data) {
    fs.appendFileSync(filename, JSON.stringify(data) + '\n', 'utf8');
    console.log(`Data written to ${filename} successfully.`);
}

// Function to generate a random identifier
function generateIdentifier() {
    const length = 50;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let identifier = '';
    for (let i = 0; i < length; i++) {
        identifier += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return identifier;
}
