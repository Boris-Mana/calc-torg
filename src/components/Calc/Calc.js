// import { useEffect, useState } from "react";
import logoInvOcenAnalitic from "../../images/investOcenkaAnalitycCenter.svg"

export default function Calc({ isResultToShow, resultArr }) {
  // const [isData, setIsData] = useState(false)

  // useEffect(() => {
  //   if (resultArr.length > 0) {
  //     setIsData(true)
  //   } else {
  //     setIsData(false)
  //   }
  // }, [resultArr])

  const tableBody = (
    <tbody>
      {resultArr.map(row =>
        <tr>
          <th className="calc__table-sell">{row.purpose}</th>
          <th className="calc__table-sell_digits">{row.min}</th>
          <th className="calc__table-sell_digits">{row.mid}</th>
          <th className="calc__table-sell_digits">{row.max}</th>
        </tr>
      )}
    </tbody>
  )

  const tableNoData = (
  <tr>
    <th className="calc__table-sell_noData">Параметры не выбраны</th>
    <th ></th>
    <th ></th>
    <th ></th>
  </tr>
  )

  return (
    <>
      <div className="calc__container">        
          <img className="calc__logo" src={logoInvOcenAnalitic} alt="Логотип ИнвестОценка аналитический центр"></img>
        
        <table className="calc__table">
          <thead>
            <tr className="calc__table-sell">
              <th className="calc__table-sell_header">Назначение</th>
              <th className="calc__table-sell_header">Мин.</th>
              <th className="calc__table-sell_header">Средн.</th>
              <th className="calc__table-sell_header">Макс.</th>
            </tr>
          </thead>
          {resultArr.length > 0 ? tableBody : tableNoData}
        </table>
      </div>
    </>
  );
}
