import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import ErrorPage from '../components/ErrorPage';
import SpecPortfolio from '../components/SpecPortfolio';

const AppRouter = () => (
    <BrowserRouter>
        <HeaderComponent/>
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>
            <Route path="/contact" component={ContactPage} />
            <Route path="/portfolio/:id" component={SpecPortfolio} />
            <Route component={ErrorPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;

 