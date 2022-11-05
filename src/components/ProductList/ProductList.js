import React, {useState} from 'react';
import styles from './ProductList.module.css';
import ProductItem from "./components/ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}


const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const setBuyButton = (items) => {
        if(items.length === 0){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy: ${getTotalPrice(items)}`
            })
        }
    }

    const add = (product) => {
        const newItems = addedItems.find(item => item.id === product.id) ?
            addedItems.filter(item => item.id !== product.id) :
            [...addedItems, product];

        setAddedItems(newItems)
        setBuyButton(newItems);
    }

    return (
        <div className={styles.List}>
            {
                products.map(product => {
                    return <ProductItem product={product} add={add}/>
                })
            }
        </div>
    );
};

export default ProductList;
