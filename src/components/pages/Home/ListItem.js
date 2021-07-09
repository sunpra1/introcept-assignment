import React from 'react';

export default function ListItem(props) {

    const { value } = props;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{value.name}</div>
                {value.country}
            </div>
            <span className="badge bg-primary rounded-pill">{value.phoneNumber}</span>
        </li>
    );
}
