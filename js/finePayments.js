"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;
/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB*/

buttonSubmit.addEventListener('click', payFine);
function validatePassport(passportNumber) {
    const passportRegex = /^[А-ЩЬЮЯЇІЄҐ][А-ЩЬЮЯЇІЄҐ]\d{6}$/;
    return passportRegex.test(passportNumber);
}

function validateCreditCard(creditCardNumber) {
    const creditCardRegex = /^\d{16}$/;
    return creditCardRegex.test(creditCardNumber);
}

function validateCVV(cvv) {
    const cvvRegex = /^\d{3}$/;
    return cvvRegex.test(cvv);
}

function payFine() {
   
    let fineNumberValue = fineNumber.value;
    let passportValue = passport.value;
    let creditCardNumberValue = creditCardNumber.value;
    let cvvValue = cvv.value;
    let amountValue = amount.value;

    if (fineNumberValue.trim() === '') {
        alert("Введіть номер штрафу");
        return;
    }

    let matchingFine = DB.find(fine => fine.номер === fineNumberValue);

    if (!matchingFine) {
        alert("Штраф з таким номером не знайден");
        return;
    }

    if (matchingFine.сума !== parseFloat(amountValue)) {
        alert("Сумма не відповідає номеру штрафа");
        return;
    }

    if (!validatePassport(passportValue)) {
        alert("Невірний номер паспорта");
        return;
    }

    if (!validateCreditCard(creditCardNumberValue)) {
        alert("Невірний номер кредитної картки");
        return;
    }

    if (!validateCVV(cvvValue)) {
        alert("Невірний CVV");
        return;
    }

    let indexToDelete = DB.findIndex(fine => fine.номер === fineNumberValue);

    if (indexToDelete !== -1) {
        DB.splice(indexToDelete, 1);
        alert(`Штраф ${fineNumberValue} сплачено та видалено`);
    } else {
        alert("Штраф не знайдено");
    }
}
