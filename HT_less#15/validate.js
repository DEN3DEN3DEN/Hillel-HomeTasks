const validators = {
    name: {
      regExp: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
      errorMessage: 'Name is incorrect',
    },

    password: {
        regExp: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        errorMessage: 'Password is incorrect',
    },

    age: {
      regExp: /^\d{2}$/,
      errorMessage: 'Age is incorrect',
    },

    email: {
        regExp: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        errorMessage: 'Email is incorrect',
    },

    phone: {
        regExp: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
        errorMessage: 'Phone is incorrect',
    },

    creditCard: {
      regExp: /^\d{16}$/,
      errorMessage: 'Card is incorrect',
    },
};

function validForm() {
   const {
        name: { value: name },
        password: { value: password },
        age: { value: age },
        email: { value: email },
        phone: { value: phone },
        card: { value: creditCard },
    } = document.forms[0].elements;
  
    if (validate({name, password, age, email, phone, creditCard})) {
        console.log('form valid');
    } else {
        console.log('form is invalid');
    }
};
  
function validate(args) {
    let validFields = 0;
    let fieldsCount = 0;

    for (let key in validators) {
        fieldsCount++;
        if (validators[key].regExp.test(args[key])) {
            validFields++;
        } else {
            console.log(validators[key].errorMessage);
        }
    }
    return validFields === fieldsCount;
};