import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import MainComponent from './components/mainComponent/MainComponent';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';
import Cities from './assets/data/bootcamps.json';
import { ICity } from './models/ICity';
import AddBootcampComponent from './components/addBootcampComponent/AddBootcampComponent';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxApplicationStore } from './models/IReduxApplicationStore';
import { fetchCities } from './store/cities/actions';
import { Spinner } from 'reactstrap';

function App() {
    const dispatch = useDispatch()
    const citiesState = useSelector((state: IReduxApplicationStore) => state.citiesSlice);

    const [selectedCity, setSelectedCity] = useState<ICity>(Cities.cities[0] as ICity);
    let content: JSX.Element | null =
        <div className="spinner">
            <Spinner />
        </div>

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch])


    if (!citiesState.isFetching) {
        content = <Switch>
            <Route exact path="/">
                <SidebarComponent selectCityHandler={setSelectedCity} currentSelectedCity={selectedCity} allCities={citiesState.cities} />
                <MainComponent selectedCityObject={selectedCity} />
            </Route>

            <Route exact path="/add_bootcamp">
                <AddBootcampComponent />
            </Route>

            <Route path="/">
                <div className="col-12 bootcamp-container">404 route</div>
            </Route>
        </Switch>
    }


    return (
        <BrowserRouter>
            <nav className="App">
                <NavbarComponent />
            </nav>

            <section className="container">
                <div className="row">
                    {content}
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
