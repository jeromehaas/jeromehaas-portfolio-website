const BASE_URL = 'https://167.99.141.165:3005';

const sendMail = (firstname, lastname, email, message) => {
  try {

    return fetch(`${BASE_URL}/contactEmail`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },  
      body: JSON.stringify({
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'message': message,
      })  
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sendMail
}
