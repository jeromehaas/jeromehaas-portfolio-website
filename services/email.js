const BASE_URL = 'https://devcube.io';

const sendMail = (firstname, lastname, email, message) => {
  try {

    return fetch(`${BASE_URL}/jeromehaas`, {
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
