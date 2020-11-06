import React, { useState } from 'react';

import './App.css';
import NavbarComponent from './components/navbarComponent/NavbarComponent';

function App() {
    return (
        <React.Fragment>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    <aside className="col-4">sidebar</aside>

                    <main className="col-8">main</main>
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
