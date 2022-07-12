import { Fragment } from "react";

import HeaderCardButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton onClick={props.onShowCart}>Cart</HeaderCardButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food'/>
        </div>
    </Fragment>
};

export default Header;