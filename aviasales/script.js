//alert('Hello World');

//ДАННЫЕ

const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = formSearch.querySelector('.input__date-depart');

/*const obj = {
        key1: 'value',
        'key2': 1,
        key3: {x: 3, y: 'object'}
    }
    obj.key4 = '001';
    console.log(obj.key1);
    console.log(obj['key2']); */

const cities = ['Москва', 'Пермь', 'Волгоград', 'Самара',
    'Екатеринбург', 'Одесса', 'Воронеж', 'Ростов-на-Дону', 'Керчь',
    'Луганск', 'Талин', 'Челябинск'
];


//ФУНКЦИИ

//список городов
const showCity = (input, list) => {
    list.textContent = '';

    if (input.value != '') {
        const filterCity = cities.filter((item) => {
            const fixitem = item.toLowerCase();
            return fixitem.includes(input.value.toLowerCase());
        });
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li)
        });
    }
}

//выбраный город возвращается в input
const getCities = (event, input, list) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
};

// метод запроса - получать данные сервера
const getData = (url) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if (request.readyState != 4) {
            return;
        };
        if (request.status === 200) {
            console.log(request);
        } else {
            console.error(request.status);
        }
    });

    request.send();

};

getData('https://jsonplaceholder.typicode.com/todos/1');


//ОБРАБОТЧИКИ СОБЫТИЙ

//для бокса "Откуда"
inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    getCities(event, inputCitiesFrom, dropdownCitiesFrom);
});

//для бокса "Куда"
inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    getCities(event, inputCitiesTo, dropdownCitiesTo);
});





/*const get = (name) => {
    console.log('Hello, ' + name);
} */