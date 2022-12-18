const validators = {
    name: {
      regExp: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
      errorMessage: 'Name is incorrect',
    },
    password: {
        regExp: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        //(?=.*[0-9]) - строка содержит хотя бы одно число;
        //(?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
        //(?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
        //(?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
        //[0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.
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
    tel: {
        regExp: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
        errorMessage: 'Phone is incorrect',
      },
    card: {
      regExp: /^\d{16}$/,
      errorMessage: 'Card is incorrect',
    },
};

document.getElementById('save').addEventListener('click', function() {
    const {
        name: { value: name },
        password: { value: password },
        age: { value: age },
        email: { value: email },
        tel: { value: tel },
        card: { value: card },
    } = document.forms[0].elements;
  
    if (validate({
        name,
        password,
        age,
        email,
        tel,
        card,
    })) {
        console.log('form valid');
    } else {
        console.log('form is invalid');
    }
});
  
function validate(args) {
    let validFields = 0;
    let fieldsCount = 0;
    for (let key in validators) {
        fieldsCount++;
        if(validators[key].regExp.test(args[key])) {
            validFields++;
        } else {
           console.log(validators[key].errorMessage);
        }
    }
    return validFields === fieldsCount;
}