// realtyType, 
export default function Breadcrumbs({ ...props } ) {
    return (
        <>
            <h3 className="breadcr__title">
                {`${props.title}`}
            </h3>
            <div className="breadcr__container">
                <p className="breadcr__text">{`${props.year} >`}</p>
                <p className="breadcr__text">{`${props.region} >`}</p>                
                <p className="breadcr__text">{`${props.realtyType} >`}</p>
                <p className="breadcr__text">{`${props.marketType} >`}</p>
                <p className="breadcr__text">{`${props.intervalType} >`}</p>                
            </div>
        </>
    );
}