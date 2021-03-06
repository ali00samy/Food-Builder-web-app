import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthen ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        {!props.isAuthen ? <NavigationItem link="/auth">Auth</NavigationItem> : <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;