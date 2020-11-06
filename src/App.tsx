import React, { useState } from 'react';

import './App.scss';
import MainComponent from './components/mainComponent/MainComponent';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';
import Cities from './assets/data/bootcamps.json';
import { ICity } from './models/ICity';

function App() {
    const [selectedCity, setSelectedCity] = useState<ICity>(Cities.cities[0] as ICity);

    return (
        <React.Fragment>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    <SidebarComponent selectCityHandler={setSelectedCity} currentSelectedCity={selectedCity} />
                    <MainComponent selectedCityObject={selectedCity} />
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
