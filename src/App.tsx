import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import MainComponent from './components/mainComponent/MainComponent';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';
import Cities from './assets/data/bootcamps.json';
import { ICity } from './models/ICity';

function App() {
    const [selectedCity, setSelectedCity] = useState<ICity>(Cities.cities[0] as ICity);

    return (
        <BrowserRouter>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    <Switch>
                        <Route path="/bootcamps">
                            <SidebarComponent selectCityHandler={setSelectedCity} currentSelectedCity={selectedCity} />
                            <MainComponent selectedCityObject={selectedCity} />
                        </Route>

                        <Route path="/add_bootcamp">
                            <p>add a bootcamp</p>
                        </Route>
                    </Switch>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
