import React, { Dispatch, SetStateAction } from 'react';
import Cities from '../../assets/data/bootcamps.json';
import { ICity } from '../../models/ICity';

interface ISidebarComponent {
    selectCityHandler: Dispatch<SetStateAction<ICity>>;
}

const SidebarComponent = (props: ISidebarComponent) => {
    const cityListItems = Cities.cities.map((city: ICity) => {
        return <li onClick={() => props.selectCityHandler(city)}>{city.cityName}</li>;
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    );
};

export default SidebarComponent;
