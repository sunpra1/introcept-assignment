import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

    console.log(props);
    let { data } = props;

    return (
        <div className="list-group rounded-0">
            {
                data.map((item, index) => <ListItem key={index} value={data[index]} />)
            }
        </div>
    );
}
