import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpensePage from '../components/EditExpensePage';
import ErrorPage from '../components/ErrorPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import HeaderComponent from '../components/HeaderComponent';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <HeaderComponent />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpenseComponent} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path='/help' component={HelpPage} />
        <Route component={ErrorPage} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;