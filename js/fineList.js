"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
     let result = DB.filter((value) => {
            return (value.номер == searchKey || value.тип == searchKey);
    
     });
     if(result.length == 0) {
        console.warn("Нічого не знайдено")
     }
 return result;
}
