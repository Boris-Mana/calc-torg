// import { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { BreadcrumbsTitle } from "../../utils/Constants/ConstantsCommon";

// realtyType, 
export default function AdditionalInfo({ ...props }) {

    return (
        <div className="additional">
            <Breadcrumbs
                title={BreadcrumbsTitle}
                year={props.year}
                region={props.region}
                realtyType={props.realtyType}
                marketType={props.marketType}
                intervalType={props.intervalType}
            />
        </div>
    )
};