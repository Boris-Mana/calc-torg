import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { SUBTITLE, TITLE, BreadcrumbsTitle } from "../../utils/Constants/ConstantsCommon";
import { LIST_YEARS_HAGGLING as LIST_YEARS, LIST_REGIONS_HAGGLING as LIST_REGIONS }
  from "../../utils/Constants/ConstantsFiltersData";
import mainData from '../../utils/mainData'
// import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

import backgroundImg from '../../images/map1900rgb.png'

// import { data_location_coeff } from "../../utils/data_location_coeffs";

function App() {
  const [year, setYear] = useState(LIST_YEARS[0].value);
  const [yearComment, setYearComment] = useState(LIST_YEARS[0].comment);
  const [region, setRegion] = useState(LIST_REGIONS[0].value);
  const [realtyType, setRealtyType] = useState('');
  const [marketType, setMarketType] = useState('')
  const [intervalType, setIntervalType] = useState('');
  const [isResultToShow, setIsResultToShow] = useState(false);
  const [result, setResult] = useState([]);

  const handleShowResult = () => {
    // console.log('Показываем таблицу');
    setIsResultToShow(true);
  };

  const getMinMidMaxKey = (intervalType, minORmaxORmid) => {
    if (minORmaxORmid === 'Среднее') {
      return 'средн.'
    } else if (intervalType === 'Доверительный' && minORmaxORmid === 'Минимальное') {
      return 'мин'
    } else if (intervalType === 'Расширенный' && minORmaxORmid === 'Минимальное') {
      return 'мин(р)'
    } else if (intervalType === 'Доверительный' && minORmaxORmid === 'Максимальное') {
      return 'макс'
    } else if (intervalType === 'Расширенный' && minORmaxORmid === 'Максимальное') {
      return 'макс(р)'
    } else {
      return 'н/д'
    }
  };

  const resetAllFilds = () => {
    // window.location.reload();
    setYear(LIST_YEARS[0].value);
    setYearComment(LIST_YEARS[0].comment);
    setRegion(LIST_REGIONS[0].value);
    setRealtyType('');
    setResult([])
    setMarketType('');
    setIntervalType('');
    // setIsResultToShow(false)

  };

  useEffect(() => {
    // console.log('Сейчас параметры отбора:', year, region, realtyType, marketType, intervalType)
    if (year !== '' && region !== '' && realtyType !== '' && marketType !== '' && intervalType !== '') {
      // console.log('Можно выбирать из', mainData)
      const arr = mainData.filter(o =>
      (
        String(o.год) === year && 
        o.область === region
        && o.типНедвиж === realtyType
        && o.типРынка === marketType
      )
      )
      // console.log('Отобрали:', arr)
      const arrFin = arr.map(o => {
        const min = intervalType === 'Расширенный' ? o.минРасш : o.мин
        const max = intervalType === 'Расширенный' ? o.максРасш : o.макс
        return {purpose: o.Назначение, min: min, mid: o.средн, max: max}
      })
      // console.log('Фин. отбор:', arrFin)
      setResult(arrFin)
    } else {
      setResult([])
    }

  }, [year, region, realtyType, marketType, intervalType])

  return (
    <div className='App'>
      <img className="App__background" src={backgroundImg} alt='' />
      <div className="App__main-box">
        <Header title={TITLE} subtitle={SUBTITLE} />
        <div className="App__container">
          <Filters
            year={year}
            yearComment={yearComment}
            region={region}
            realtyType={realtyType}
            marketType={marketType}
            intervalType={intervalType}
            onSetYear={(category) => setYear(category)}
            onSetRegion={(category) => setRegion(category)}
            onSetRealtyType={(e) => setRealtyType(e.target.value)}
            onSetMarketType={(e) => setMarketType(e.target.value)}
            onSetIntervalType={(e) => setIntervalType(e.target.value)}
            onShowResult={handleShowResult}
            onResetFields={resetAllFilds}
          />
          <div className="App__container-right">
            <About />
            <Calc
              isResultToShow={isResultToShow}
              resultArr={result}
            />
            <Breadcrumbs
              title={BreadcrumbsTitle}
              year={year}
              region={region}
              realtyType={realtyType}
              marketType={marketType}
              intervalType={intervalType}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
