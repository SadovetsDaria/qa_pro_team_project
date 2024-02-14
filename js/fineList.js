"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

   /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
    /*return [
        {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    ];*/

let number = document.getElementById("searchInput2").value;
let fineType = document.getElementById("searchInput").value;
let searchKey = (number) ? number : fineType;
function searchFines(searchKey) {
    // Проверяем, что передано значение для поиска
    if (!searchKey) {
        alert ("Введіть значення для пошуку");
        return [];
    }

    // Производим поиск по номеру штрафа или типу штрафа
    let result = DB.filter(fine => {
        return (
            fine.номер.includes(searchKey) ||
            fine.тип.toLowerCase() === searchKey.toLowerCase()
        );
    });

    if (result.length === 0) {
        alert ("Запису не існує");
    }

    return result;
}

// Экспортируем функцию для использования в других файлах
window.fineList = {
    searchFines: searchFines
};


