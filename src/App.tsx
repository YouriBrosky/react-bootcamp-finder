import React, { useState } from 'react';

import './App.scss';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';

function App() {
    return (
        <React.Fragment>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    <SidebarComponent />

                    <main className="col-8">main</main>
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
