import React from "react";
import './categories.scss'

export default function Categories() {

    return <div className="categories">

        <h1>Select category</h1>

        <div className="categories__breadcrumbs">
            <div className="categories__breadcrumbs-item">Select category</div>
        </div>

        <div className="categories__wrapper">
            <div className="categories__item">Cars</div>
            <div className="categories__item">Seeds</div>
            <div className="categories__item">Planes</div>
            <div className="categories__item">Houses</div>
        </div>

    </div>
}