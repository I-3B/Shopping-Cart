import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './component/HomePage';
import Nav from './component/Nav';
import ShopPage from './component/ShopPage';
import ShoppingCart from './component/ShoppingCart';
import './App.css';
let purchasesLocal = new Map(JSON.parse(localStorage.getItem('purchasesMap')));
if (purchasesLocal === null) purchasesLocal = new Map();
const App = () => {
    const [purchases, setPurchases] = useState(purchasesLocal);
    const [itemsCount, setItemsCount] = useState(0);
    const [dependecy, setDependecy] = useState('');
    const purchasesCallback = (childPurchases) => {
        setPurchases(childPurchases);
        setDependecy(JSON.stringify(Array.from(childPurchases.entries())));
        localStorage.setItem(
            'purchasesMap',
            JSON.stringify(Array.from(childPurchases.entries()))
        );
    };
    const removeCallback = (itemRemoved) => {
        let buffer = purchases;
        buffer.delete(itemRemoved);
        setPurchases(buffer);
        localStorage.setItem(
            'purchasesMap',
            JSON.stringify(Array.from(buffer.entries()))
        );
        setDependecy(JSON.stringify(Array.from(purchases.entries())));
    };
    useEffect(() => {
        setItemsCount(purchases.size);
    }, [dependecy]);
    return (
        <BrowserRouter>
            <div id="app">
                <Nav items={itemsCount} />
                <Switch>
                    <Route exact path="https://i-3b.github.io/Shopping-Cart/">
                        <Homepage />
                    </Route>
                    <Route
                        exact
                        path="https://i-3b.github.io/Shopping-Cart/Shop"
                    >
                        <ShopPage
                            purchases={purchases}
                            purchasesParent={purchasesCallback}
                        />
                    </Route>
                    <Route
                        exact
                        path="https://i-3b.github.io/Shopping-Cart/Purchases"
                    >
                        <ShoppingCart
                            purchases={purchases}
                            purchasesParent={purchasesCallback}
                            remove={removeCallback}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
