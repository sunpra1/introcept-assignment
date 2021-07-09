import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ListItem(props) {

    const { value } = props;

    return (
        <li className="list-group-item">
            <h6 className="text-info">{value.name}</h6>
            <p className="text-secondary" style={{ fontSize: "13px" }}>
                <span className="text-danger"><FontAwesomeIcon icon={faHeart} /></span> FAVOURITE BRAND: {value.favouritePhoneBrand}
                <span className="text-dark ms-4"><FontAwesomeIcon icon={faMap} /></span> COUNTRY: {value.country}
                <span className="text-primary ms-4"><FontAwesomeIcon icon={faPhone} /></span> PHONE NUMBER: {value.phoneNumber}
            </p>
        </li>
    );
}
