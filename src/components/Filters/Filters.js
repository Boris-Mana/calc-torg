import { useEffect, useState } from "react";
import FilterElement from "./FitlerElement/FitlerElement";

import ChildrenForDropMenu from './Children/ChildrenForDropMenu';
import ChildrenDropMenuIn from "./Children/ChildrenDropMenuIn";
import ChildrenRadioInItem from "./Children/ChildrenRadioInItem";

import {
    LIST_YEARS_HAGGLING,    
    LIST_REGIONS_HAGGLING,
    LIST_REALTY_TYPE,
    LIST_MARKET_TYPE,    
    LIST_INTERVAL_TYPES,
}
    from "../../utils/Constants/ConstantsFiltersData";
import { FiltersTitle } from "../../utils/Constants/ConstantsCommon";

export default function Filters({ ...props }) {
    // const [isSendResultActive, setIsSendResultActive] = useState(false);

    const [purposeText, setPuposeText] = useState('');
    const [ariaTypeText, setAriaTypeText] = useState('');
    const [ariaDistrctText, setAriaDistrctText] = useState('');
    const [intervalTypeText, setIntervalTypeText] = useState('');
    const [minMaxMidText, setMinMaxMidText] = useState('');

    const fillRadioBox = (dataArray, handler) => {
        return (
            <>
                {dataArray.map((item, i) => {
                    return (<ChildrenRadioInItem key={i} name={item.name} value={item.value} text={item.text} isDisable={!item.isOn} handlerOnChange={handler} />)
                })}
            </>
        )
    };
    const resetTextFields = () => {
        setPuposeText('');
        setAriaTypeText('');
        setAriaDistrctText('');
        setIntervalTypeText('');
        setMinMaxMidText('');
        // setIsSendResultActive(false)
        props.onResetFields()
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onShowResult()
        resetTextFields();
    };

    useEffect(() => {
        // console.log('Работает слушатель показа кнопки')
        if (
            props.year !== ''
            && props.region !== ''
            && props.realtyType !== ''
            && props.marketType !== ''
            && props.intervalType
        ) {
            // setIsSendResultActive(true)
            // console.log('Надо показать кнопку')
        } 
        // else {
        //     console.log('Не надо показывать кнопку')
        // }

    }, [props.year, props.region, props.realtyType, props.marketType, props.intervalType])

    const chooseYear = <ChildrenForDropMenu name="year" value={props.year} />
    const chooseDistrict = <ChildrenForDropMenu name="region" value={props.region} />

    const childrenYearDrop = <ChildrenDropMenuIn value={props.year} onHandle={props.onSetYear} dataArray={LIST_YEARS_HAGGLING} />;
    const childrenRegionDrop = <ChildrenDropMenuIn value={props.region} onHandle={props.onSetRegion} dataArray={LIST_REGIONS_HAGGLING} />;

    return (
        <form className="filters" onSubmit={onSubmit}>
            <h2 className="filters__title">{FiltersTitle}</h2>

            <fieldset className="filters__form">
                <FilterElement title="Область (регион):" children={chooseDistrict} childrenDrop={childrenRegionDrop} />
                <FilterElement title="Актуально на год:" comment={props.yearComment} children={chooseYear} childrenDrop={childrenYearDrop} />
                <FilterElement title="Тип недвижимости:" children={fillRadioBox(LIST_REALTY_TYPE, props.onSetRealtyType)} />
                <FilterElement title="Тип рынка:" children={fillRadioBox(LIST_MARKET_TYPE, props.onSetMarketType)} />
                <FilterElement title="Вид интервала значений:" children={fillRadioBox(LIST_INTERVAL_TYPES, props.onSetIntervalType)} />
            </fieldset>
            <div className="filters__submit-res-box">
                <button type="reset" onClick={resetTextFields} className='filters__reset-btn'>
                    Сбросить фильтры
                </button>
                {/* <button type="submit" className={`filters__send-btn ${isSendResultActive ? 'filters__submit-btn_active' : ''
                    }`}>
                    Показать результат
                </button> */}
            </div>
        </form>
    );
}
