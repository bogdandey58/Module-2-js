const taba = 'Таба';
const sharm = 'Шарм';
const hurgada = 'Хургада';

let resortName;

let numOfTickets;

document.querySelector('.btn').onclick = selectResort;

function selectResort(params) {
    let resortNum = prompt(`
    Выберите курорт !
        1 - Таба;
        2 - Шарм;
        3 - Хургада;
    `, 1);

    if (resortNum == 1) {
        resortName = taba;
        numOfTickets = 6;
    } else if (resortNum == 2) {
        resortName = sharm;
        numOfTickets = 15;
    } else if (resortNum == 3) {
        resortName = hurgada;
        numOfTickets = 25;
    } else {
        alert('Такого курорта нет');
        selectResort();
    }
    bookResort(resortNum, resortName, numOfTickets);
}

function bookResort(params1, params2, params3) {
    console.log(params1 + ' ' + params2 + ' ' + params3);

    let resortName = params2;
    let numOfTickets = params3;

    let bookResort = prompt(`
    Вы выбрали курорт ${resortName}
    Введите количество мест в группе на ${resortName}:
    `, 1);

    if (params1 == 1 && bookResort > 0 && bookResort <= 6 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else if (params1 == 2 && bookResort > 0 && bookResort <= 15 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else if (params1 == 3 && bookResort > 0 && bookResort <= 25 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else {
        alert(`В группе на ${params2} нет такого кол-ва мест !
               Выберите другой курорт !`);
        selectResort();
    }
}

function isBook(params1, params2, params3) {
    let isBook = confirm(`Все ОК, отправляемся на ${params1}`);
    if (isBook) {
        let ticketsLeft = params3 - params2;
        alert(`Еще осталось ${ticketsLeft} мест в группу на ${params1}`);
    }
}