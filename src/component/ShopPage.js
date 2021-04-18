import Card from './Card';
import '../style/ShopPage.css';
import { useEffect, useState } from 'react';
const ShopPage = (props) => {
    const [purchases, setPurchases] = useState(props.purchases);
    const boughtCallBack = (itemName, price, itemsCount) => {
        let buffer = purchases;
        if (itemsCount > 0) {
            buffer.set(itemName, [Number(price), itemsCount]);
            setPurchases(buffer);
            props.purchasesParent(buffer);
        } else {
            buffer.delete(itemName);
            props.purchasesParent(buffer);
        }
    };
    return (
        <main>
            <Card
                description="Gaming Pc"
                img="case"
                price="1500"
                bought={boughtCallBack}
            />
            <Card
                description="Asus RoG gaming laptop"
                img="laptop"
                price="1200"
                bought={boughtCallBack}
            />
            <Card
                description="RGB keyboard"
                img="keyboard"
                price="50"
                bought={boughtCallBack}
            />
            <Card
                description="Gaming mouse"
                img="mouse"
                price="40"
                bought={boughtCallBack}
            />
            <Card
                description="144hz monitor"
                img="monitor"
                price="600"
                bought={boughtCallBack}
            />
            <Card
                description="Gaming headphone"
                img="headphone"
                price="100"
                bought={boughtCallBack}
            />
            <Card
                description="Gaming chair"
                img="chair"
                price="500"
                bought={boughtCallBack}
            />
            <Card
                description="vr headset"
                img="vr"
                price="1000"
                bought={boughtCallBack}
            />
        </main>
    );
};
export default ShopPage;
