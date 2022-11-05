import React from 'react';
import styles from './ProductItem.module.css'
import Button from "../../../Button/Button";

const ProductItem = ({product, add}) => {
    const addHandler = () => {
        add(product);
    }

    return (
        <div className={styles.Product}>
            <div className={styles.img}/>
            <div>{product.title}</div>
            <div className={styles.description}>{product.description}</div>
            <div>
                <span>Price: {product.price}</span>
            </div>
            <Button className={styles.addBtn} onClick={addHandler}>
                Add to card
            </Button>
        </div>
    );
};

export default ProductItem;
