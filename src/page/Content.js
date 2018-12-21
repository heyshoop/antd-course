import React from 'react';
import ShoppingList from './shoppinglist';

class Content extends React.Component {
    render() {
        return (
            <ShoppingList name="张三" />
        );
    }
}

export default Content;