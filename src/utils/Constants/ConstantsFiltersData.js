const LIST_YEARS_HAGGLING = [
    {value: '2024', text: 'с 1 янв 2024 г', 'isOn': true, comment: `Для даты оценки в период:\nс 1 янв по 31 дек 2024`}, 
    {value: '2023', text: 'с 1 янв 2023 г', 'isOn': true, comment: `Для даты оценки в период:\nс 1 янв по 31 дек 2023`},
    {value: '2022', text: 'с 1 янв 2022 г', 'isOn': true, comment: `Для даты оценки в период:\nс 1 янв по 31 дек 2022`},    
];

const LIST_PURPOSE_LAND_HAGGLING = [    
    {name: 'purpose', value: '', text: '', isOn: true},
    {name: 'purpose', value: 'ИЖС', text: 'индивидуальное жилищное строительство, в т.ч. ЛПХ, ДНП, СНТ', isOn: true},
    {name: 'purpose', value: 'МЖС', text: 'многоквартирное жилищное строительство', isOn: true},
    {name: 'purpose', value: 'торг-офис', text: 'коммерческая (торгово-офисная) застройка', isOn: true},
    {name: 'purpose', value: 'произв-скл', text: 'индустриальная (производственно-складская) застройка', isOn: true},
    {name: 'purpose', value: 'придорож', text: 'под объекты придорожного сервиса', isOn: true},
    {name: 'purpose', value: 'отдых', text: 'под объекты рекреации', isOn: true},
    {name: 'purpose', value: 'сельхоз', text: 'под объекты сельскохозяйственного назначения', isOn: true},
];

const LIST_PURPOSE_BUILD_HAGGLING = [    
    {name: 'purpose', value: 'класс-торг-офис', text: 'высококлассное торгово-офисное', isOn: true},
    {name: 'purpose', value: 'некласс-торг-офис', text: 'низкоклассное торгово-офисное', isOn: true},
    {name: 'purpose', value: 'стрит-ритейл', text: 'объекты стрит-ритейл', isOn: true},
    {name: 'purpose', value: 'придорож-здания', text: 'объекты придорожного сервиса', isOn: true},
    {name: 'purpose', value: 'класс-произв', text: 'высококлассное производственно-складское', isOn: true},
    {name: 'purpose', value: 'некласс-произв', text: 'низкоклассное производственно-складское', isOn: true},
    {name: 'purpose', value: 'отдых-здания', text: 'объекты рекреации', isOn: true},
    {name: 'purpose', value: 'сельхоз-здания', text: 'объекты сельскохозяйственного назначения', isOn: true},
];

const LIST_REGIONS_HAGGLING = [
    {value: 'Воронежская', text: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', text: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', text: 'Липецкая', 'isOn': true},
    {value: 'Курская', text: 'Курская', 'isOn': true},
    {value: 'Тамбовская', text: 'Тамбовская', 'isOn': true},
    {value: 'Орловская', text: 'Орловская', 'isOn': true},
];

// const DEFALT_YEAR_HAGGLING = '01.01.2023';
const LIST_REALTY_TYPE = [
    // {name: 'ariaType', value: '', text: '', isOn: true},
    { name: 'type', value: 'Земельные участки', text: 'Земельные участки', isOn: true },
    { name: 'type', value: 'Здания, нежилые помещения', text: 'Здания, нежилые помещения', isOn: true },
];

const LIST_MARKET_TYPE = [
    // {name: 'ariaType', value: '', text: '', isOn: true},
    { name: 'marketType', value: 'Активный', text: 'Активный', isOn: true },
    { name: 'marketType', value: 'Неактивный', text: 'Неактивный', isOn: true },
];

const LIST_INTERVAL_TYPES = [
    // {name: 'interval', value: '', text: '', isOn: true},
    { name: 'interval', value: 'Доверительный', text: 'доверительный', isOn: true },
    { name: 'interval', value: 'Расширенный', text: 'расширенный', isOn: true },
];

const LIST_MIN_MAX_MID = [
    {name: 'use', value: '', text: '', isOn: true},    
    { name: 'use', value: 'Минимальное', text: 'Минимальное', isOn: true },
    { name: 'use', value: 'Среднее', text: 'Среднее', isOn: true },
    { name: 'use', value: 'Максимальное', text: 'Максимальное', isOn: true },
];

export {  
    LIST_YEARS_HAGGLING,
    LIST_PURPOSE_LAND_HAGGLING,    
    LIST_PURPOSE_BUILD_HAGGLING,
    LIST_REALTY_TYPE,
    LIST_REGIONS_HAGGLING,    
    LIST_MARKET_TYPE,    
    LIST_MIN_MAX_MID,    
    LIST_INTERVAL_TYPES,
    };