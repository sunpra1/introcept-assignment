import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function App(props) {

    let [data, setData] = useState([{ name: "Sunil Prasai", country: "Nepal", favouritePhoneBrand: "One Plus", phoneNumber: 9849147995 }, { name: "Saugat Uprety", country: "USA", favouritePhoneBrand: "Samsung", phoneNumber: 9841668402}]);

    function add(value) {
        setData([...data, value]);
    }

    return (
        <AppContext.Provider value={{ data, add }}>
            {props.children}
        </AppContext.Provider>
    );
}
