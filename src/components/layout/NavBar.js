import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link id="navHomeLink" to="/" className="navbar-brand">Sunil Prasai</Link>
            </div>
        </nav>
    );
}
