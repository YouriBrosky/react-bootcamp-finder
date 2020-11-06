import React, { Dispatch, SetStateAction } from 'react';
import Cities from '../../assets/data/bootcamps.json';
import { ICity } from '../../models/ICity';

interface ISidebarComponent {
    selectCityHandler: Dispatch<SetStateAction<ICity>>;
    currentSelectedCity: ICity;
}

const SidebarComponent = (props: ISidebarComponent) => {
    const cityListItems = Cities.cities.map((city: ICity) => {
        let activeClass = props.currentSelectedCity.id === city.id ? 'active-city' : '';

        return (
            <li key={city.id} onClick={() => props.selectCityHandler(city)} className={activeClass}>
                {city.cityName}
            </li>
        );
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    );
};

export default SidebarComponent;
