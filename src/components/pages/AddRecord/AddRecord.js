import React, { useState, useContext } from 'react';
import NavBar from '../../layout/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faMap, faMobile, faPhone, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Validator from 'validator';
import { AppContext } from '../../context/App';

const countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo (The Democratic Republic of the Congo)", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of Iran)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (Democratic People's Republic of Korea)", "Korea (Republic of Korea)", "Kuwait", "Kyrgyzstan", "Lao (People's Democratic Republic of Lao)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of Micronesia)", "Moldova (Republic of Moldova)", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

export default function AddRecord(props) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("0");
    const [favouritePhoneBrand, setFavouriteMobileBrand] = useState("");
    const [errors, setErrors] = useState({});
    const { add } = useContext(AppContext);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "name":
                setName(value);
                break;

            case "phoneNumber":
                setPhoneNumber(value);
                break;

            case "country":
                setCountry(value);
                break;

            case "favouritePhoneBrand":
                setFavouriteMobileBrand(value);
                break;

            default:
                break;
        }
    }

    function addRecord(e) {
        e.preventDefault();
        if (validate()) {
            add({ name, phoneNumber, country, favouritePhoneBrand });
            props.history.goBack();
        }
    }

    function validate() {
        const validarionErrors = {};
        if (Validator.isEmpty(name))
            validarionErrors.name = "Name is required.";
        else if (!Validator.isEmpty(name) && Validator.isNumeric(name)) {
            validarionErrors.name = "Name cannot be numeric characters";
        } else if (!Validator.isEmpty(name)) {
            let containsNumeric = false;
            for (let i = 0; i <= 10; i++) {
                if (name.indexOf(i) > -1) {
                    containsNumeric = true;
                    break;
                }
            }
            if (containsNumeric) {
                validarionErrors.name = "Name cannot contain numeric characters";
            }
        }

        if (Validator.isEmpty(phoneNumber)) {
            validarionErrors.phoneNumber = "Phone number is required";
        } else if (Validator.trim(phoneNumber).length !== 10) {
            validarionErrors.phoneNumber = "Phone number must be 10 characters long";
        } else if (!Validator.isNumeric(phoneNumber)) {
            validarionErrors.phoneNumber = "Phone number must be numeric value";
        }

        if (Validator.isEmpty(country)) {
            validarionErrors.country = "Country is required";
        } else if (!countries.includes(country)) {
            validarionErrors.country = "Invalid country provided.";
        }

        if (Validator.isEmpty(favouritePhoneBrand)) {
            validarionErrors.favouritePhoneBrand = "Favourite phone brand is required";
        }

        setErrors(validarionErrors);
        return Object.keys(validarionErrors).length === 0;
    }

    function handleInputFieldFocus(e) {
        delete errors[e.target.name];
        setErrors({ ...errors });
    }

    function handleInputFieldBlur(e) {
        const name = e.target.name;
        const value = e.target.value;
        var error = null;
        switch (name) {
            case "name": {
                if (Validator.isEmpty(value))
                    error = "Name is required.";
                else if (!Validator.isEmpty(value) && Validator.isNumeric(name)) {
                    error = "Name cannot be numeric characters";
                } else if (!Validator.isEmpty(value)) {
                    let containsNumeric = false;
                    for (let i = 0; i <= 10; i++) {
                        if (name.indexOf(i) > -1) {
                            containsNumeric = true;
                            break;
                        }
                    }
                    if (containsNumeric) {
                        error = "Name cannot contain numeric characters";
                    }
                }
                break;
            }

            case "phoneNumber": {
                if (Validator.isEmpty(value)) {
                    error = "Phone number is required";
                } else if (Validator.trim(value).length !== 10) {
                    error = "Phone number must be 10 characters long";
                } else if (!Validator.isNumeric(value)) {
                    error = "Phone number must be numeric value";
                }
                break;
            }

            case "country": {
                if (Validator.isEmpty(value)) {
                    error = "Country is required";
                } else if (!countries.includes(value)) {
                    error = "Invalid country provided.";
                }
                break;
            }

            case "favouritePhoneBrand": {
                if (Validator.isEmpty(value)) {
                    error = "Favourite phone brand is required";
                }
                break;
            }

            default:
                break;
        }
        if (error) setErrors({ ...errors, [name]: error });
    }

    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-md-6 mx-auto p-5 box-shadow">
                        <form onSubmit={addRecord}>
                            <p className="text-danger font-small">FIELD MARKED WITH ASTERISK (<span><FontAwesomeIcon className="text-danger asterisk" icon={faAsterisk} /></span>) ARE REQUIRED</p>

                            <div className="form-group">
                                <label htmlFor="nameInput" className="text-info">NAME <FontAwesomeIcon className="text-danger m-1 asterisk" icon={faAsterisk} /></label>
                                <div className="input-group">
                                    <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faUser} /> </span>
                                    <input id="nameInput" type="text" value={name} onFocus={handleInputFieldFocus} onChange={handleChange} onBlur={handleInputFieldBlur} name="name" placeholder="PROVIDE NAME" className={"form-control rounded-0 " + (errors.name && "is-invalid")} autoComplete="off" />
                                    <div className="invalid-feedback">
                                        <span>{errors.name}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="phoneNumberInput" className="text-info">PHONE NUMBER <FontAwesomeIcon className="text-danger m-1 asterisk" icon={faAsterisk} /></label>
                                <div className="input-group">
                                    <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faPhone} /> </span>
                                    <input id="phoneNumberInput" type="number" value={phoneNumber} onFocus={handleInputFieldFocus} onChange={handleChange} onBlur={handleInputFieldBlur} name="phoneNumber" placeholder="PROVIDE PHONE NUMBER" className={"form-control rounded-0 " + (errors.phoneNumber && "is-invalid")} autoComplete="off" />
                                    <div className="invalid-feedback">
                                        <span>{errors.phoneNumber}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="countryInput" className="text-info">COUNTRY <FontAwesomeIcon className="text-danger m-1 asterisk" icon={faAsterisk} /></label>
                                <div className="input-group">
                                    <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faMap} /> </span>
                                    <select id="countryInput" type="number" value={country} onFocus={handleInputFieldFocus} onChange={handleChange} onBlur={handleInputFieldBlur} name="country" className={"form-control rounded-0 " + (errors.country && "is-invalid")} autoComplete="off">
                                        <option value="0" key="0" disabled>SELECT COUNTRY</option>
                                        {
                                            countries.map((element, index) => <option key={index} value={element} >{element}</option>)
                                        }
                                    </select>
                                    <div className="invalid-feedback">
                                        <span>{errors.country}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="favouritePhoneBrandInput" className="text-info">FAVOURITE PHONE BRAND <FontAwesomeIcon className="text-danger m-1 asterisk" icon={faAsterisk} /></label>
                                <div className="input-group">
                                    <span className="input-group-text  rounded-0" id="inputGroupPrepend"> <FontAwesomeIcon icon={faMobile} /> </span>
                                    <input id="favouritePhoneBrandInput" type="text" value={favouritePhoneBrand} onFocus={handleInputFieldFocus} onChange={handleChange} onBlur={handleInputFieldBlur} name="favouritePhoneBrand" placeholder="PROVIDE FAVOURITE PHONE BRAND" className={"form-control rounded-0 " + (errors.favouritePhoneBrand && "is-invalid")} autoComplete="off" />
                                    <div className="invalid-feedback">
                                        <span>{errors.favouritePhoneBrand}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-4 d-flex">
                                <button id="addNewRecord" type="submit" onClick={addRecord} className="btn btn-success rounded-0 mx-auto px-4"><FontAwesomeIcon icon={faPlus} /> ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}