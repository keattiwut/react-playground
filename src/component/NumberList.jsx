import React from 'react';

class NumberList extends React.Component {

    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const items = numbers.map((number, index) => 
            <li key={number.toString()} value={number}>
                {number}
            </li>
        );

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default NumberList;