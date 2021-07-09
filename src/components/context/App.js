import React, { createContext, useState, useCallback } from 'react';

export const AppContext = createContext();

export default function App(props) {

    let [data, setData] = useState([]);

    function add(value) {
        setData([...data, value]);
    }

    return (
        <AppContext.Provider value={{ data, add }}>
            {props.children}
        </AppContext.Provider>
    );
}
