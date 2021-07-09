import { faMap, faMobile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Filter(props) {
    const { country, favouritePhoneBrand, selectedCountry, selectedFavouritePhoneBrand, setSelectedCountry, setSelectedFavouritePhoneBrand } = props;
    function handleChange(e) {
        switch (e.target.name) {
            case "phoneBrand":
                setSelectedFavouritePhoneBrand(e.target.value);
                break;
            case "country":
                setSelectedCountry(e.target.value);
                break;
            default:
                break;
        }
    }

    function handleClearSelectedCountry() {
        setSelectedCountry("0");
    }

    function handleClearSelectedPhoneBrand() {
        setSelectedFavouritePhoneBrand("0");
    }

    return (
        <div className="col-md-12 d-flex justify-content-around align-items-between my-4">
            <div className="col-md-3">
                <div className="input-group">
                    <label htmlFor="country" className="input-group-text rounded-0"> <FontAwesomeIcon icon={faMap} /> </label>
                    <select name="country" value={selectedCountry} onChange={handleChange} id="phoneBrand" className="form-control rounded-0">
                        <option value="0" key="0" disabled>SELECT COUNTRY</option>
                        {
                            country.map((element, index) => <option value={element} key={index}>{element}</option>)
                        }
                    </select>
                    {selectedCountry !== "0" && <label className="input-group-text rounded-0 text-danger" onClick={handleClearSelectedCountry}> <FontAwesomeIcon icon={faTimes} /> </label>}
                </div>
            </div>
            <div className="col-md-3">
                <div className="input-group">
                    <label htmlFor="phoneBrand" className="input-group-text rounded-0"> <FontAwesomeIcon icon={faMobile} /> </label>
                    <select name="phoneBrand" value={selectedFavouritePhoneBrand} onChange={handleChange} id="phoneBrand" className="form-control rounded-0">
                        <option value="0" disabled>SELECT PHONE BRAND</option>
                        {
                            favouritePhoneBrand.map((element, index) => <option key={index} value={element}>{element}</option>)
                        }
                    </select>
                    {selectedFavouritePhoneBrand !== "0" && <label className="input-group-text rounded-0 text-danger" onClick={handleClearSelectedPhoneBrand}> <FontAwesomeIcon icon={faTimes} /> </label>}
                </div>
            </div>
        </div>
    );
}
