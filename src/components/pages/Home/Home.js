import React from 'react';
import NavBar from '../../layout/NavBar';
import List from './List';

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 my-4">
                        <List />
                    </div>
                </div>
            </div>
        </>
    );
}
