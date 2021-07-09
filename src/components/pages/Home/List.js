import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { AppContext } from '../../context/App';
import ListItem from './ListItem';

export default function List() {

    let { data } = useContext(AppContext);

    return (
        <div className="list-group">
            {
                data.map((item, index) => <ListItem value={data[index]} />)
            }
        </div>
    );
}
