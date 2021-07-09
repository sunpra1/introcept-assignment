import React, { useContext, useState } from 'react';
import NavBar from '../../layout/NavBar';
import List from './List';
import Filter from './Filter';
import { AppContext } from '../../context/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Home() {

    const [selectedCountry, setSelectedCountry] = useState("0");
    const [selectedFavouritePhoneBrand, setSelectedFavouritePhoneBrand] = useState("0");

    var { data } = useContext(AppContext);
    var country = [];
    var favouritePhoneBrand = [];

    data.forEach(element => {
        if (!country.includes(element.country))
            country.push(element.country);
        if (!favouritePhoneBrand.includes(element.favouritePhoneBrand))
            favouritePhoneBrand.push(element.favouritePhoneBrand);
    });

    if (selectedCountry !== "0") {
        data = data.filter(element => element.country === selectedCountry);
    }

    if (selectedFavouritePhoneBrand !== "0") {
        data = data.filter(element => element.favouritePhoneBrand === selectedFavouritePhoneBrand);
    }

    return (
        <>
            <NavBar />
            <Filter country={country} favouritePhoneBrand={favouritePhoneBrand} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} selectedFavouritePhoneBrand={selectedFavouritePhoneBrand} setSelectedFavouritePhoneBrand={setSelectedFavouritePhoneBrand} />
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12">
                        <Link to="/add" className="btn btn-success float-end rounded-0"> <FontAwesomeIcon icon={faPlus} /> ADD RECORD</Link>
                    </div>

                    <div className="col-md-12 my-4">
                        <List data={data}  />
                    </div>
                </div>
            </div>
        </>
    );
}
