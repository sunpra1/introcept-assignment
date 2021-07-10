import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
    let { data } = props;
    return (
        <div className="list-group rounded-0">
            {
                data.length > 0 ? data.map((item, index) => <ListItem key={index} value={data[index]} />) : (<h6 className="text-danger text-center">NO RECORDS FOUND</h6>)
            }
        </div>
    );
}
