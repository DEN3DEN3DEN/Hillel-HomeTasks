document.querySelector('.validateBtn').addEventListener('click', function() {
    const firstName = document.forms.inputForm.name.value;
    const validFirstName = validateUser(firstName, document.forms.inputForm.elements[0]);
    const patronymic = document.forms.inputForm.patronymic.value;
    const validPatronymic = validateUser(patronymic, document.forms.inputForm.elements[1]);
    const lastName = document.forms.inputForm.surname.value;
    const validLastName = validateUser(lastName, document.forms.inputForm.elements[2]);
    const city = document.querySelector('select[name=city]').value;
    const validCity = validateCityAndBranch(city, document.forms.inputForm.elements[3]);
    const branch = document.querySelector('select[name=warehouse]').value;
    const validBranch = validateCityAndBranch(branch, document.forms.inputForm.elements[4]);
    const payMethod = document.querySelectorAll('input[type=radio]');
    const validPay = validatePayMethod(payMethod);
    const payForOrderInform = valueOfPayMethod(validPay);
    const finalPayMethod = checkPayMethod(payForOrderInform);
    const amount = document.querySelector('input[type=number]').value;
    const validAmount = validateAmount(document.querySelector('input[type=number]'));
    const coment = document.querySelector('textarea[name=comment]').value;
    const validComent = validateComent(coment);

    if (validFirstName && validPatronymic && validLastName && validCity && validBranch && finalPayMethod && validAmount && validComent) {
        const orderForm = document.querySelector('.form');
        orderForm.hidden = true;
        const orderInfo = document.querySelector('.order-information');
        orderInfo.hidden = false;
        orderInfo.children[0].innerHTML = `First name: ${firstName}`;
        orderInfo.children[1].innerHTML = `Patronymic: ${patronymic}`;
        orderInfo.children[2].innerHTML = `Last name: ${lastName}`;
        orderInfo.children[3].innerHTML = `Delivery city: ${city}`;
        orderInfo.children[4].innerHTML = `Branch of Nova Pochta: ${branch}`;
        orderInfo.children[5].innerHTML = `Pay options: ${payForOrderInform}`;
        orderInfo.children[6].innerHTML = `Amount buy: ${amount} pcs`;
        orderInfo.children[7].innerHTML = `Your coment: ${coment}`;
    }
})

function validateUser(name, paragraf) {
    if (isFinite(name) || name == '') {
        paragraf.nextElementSibling.innerHTML = 'Value entered incorrectly!';
        return false;
    } else {
        paragraf.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validateCityAndBranch(value, paragraf) {
    if (value == '...') {
        paragraf.nextElementSibling.innerHTML = 'Value entered incorrectly!';
        return false;
    } else {
        paragraf.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validatePayMethod(payMethod) {
    for (let method of payMethod) {
        if (method.checked) {
            return method.value;
        }
    }
}

function valueOfPayMethod(finalPayMethod) {
    const payOptions = {card: 'by card', on_delivery: 'Cash on delivery'};
    for (let key in payOptions) {
        if (key == finalPayMethod) {
            return (payOptions[key])
        } 
    }
}

function checkPayMethod(method) {
    if (method == undefined) {
        document.forms.inputForm.children[5].children[3].innerHTML = 'Chose the payment method!';
        method = false;
    } else {
        document.forms.inputForm.children[5].children[3].innerHTML = '';
        method = true;
    }
    return method;
}

function validateAmount(num) {
    if (num.value < 1) {
        num.nextElementSibling.innerHTML = 'Value entered incorrectly!';
        return false;
    } else {
        num.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validateComent(string) {
    if (string == '') {
        document.forms.inputForm.elements[8].nextElementSibling.innerHTML = 'Enter your coment please!';
        return false;
    } else {
        document.forms.inputForm.elements[8].nextElementSibling.innerHTML = '';
        return true;
    }
}



