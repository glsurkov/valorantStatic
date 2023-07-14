import React from 'react';
import company_logo from "../../images/company-logo.svg";
import product_logo from "../../images/product-logo.svg";

const Logo = () => {
    return (
        <div className = 'header__logo'>
            <img className = "company-logo header__company-logo" src = {company_logo} alt='company-logo'/>
            <img className = "product-logo header__product-logo" src = {product_logo} alt='product-logo'/>
        </div>
    );
};

export default Logo;