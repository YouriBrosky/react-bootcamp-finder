import React from 'react';
import { ICity } from '../../models/ICity';

interface IMainComponent {
    selectedCityObject: ICity;
}

const MainComponent = (props: IMainComponent) => {
    console.log('main selected city', props.selectedCityObject);
    let cityDetails = null;
    if (Object.keys(props.selectedCityObject).length > 0) {
        cityDetails = (
            <React.Fragment>
                <h3>{props.selectedCityObject.cityName}</h3>
            </React.Fragment>
        );
    }

    return <main className="col-8 main">{cityDetails}</main>;
};

export default MainComponent;
