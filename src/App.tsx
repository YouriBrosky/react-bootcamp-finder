import React, { useState } from 'react';

import './App.scss';
import MainComponent from './components/mainComponent/MainComponent';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';
import { ICity } from './models/ICity';

function App() {
    const [selectedCity, setSelectedCity] = useState<ICity>({} as ICity);

    console.log('selectedCity', selectedCity);

    return (
        <React.Fragment>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    <SidebarComponent selectCityHandler={setSelectedCity} />
                    <MainComponent />
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
