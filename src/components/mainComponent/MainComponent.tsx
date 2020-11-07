import React from 'react';
import { ICity } from '../../models/ICity';

interface IMainComponent {
    selectedCityObject: ICity;
}

const MainComponent = (props: IMainComponent) => {
    let cityDetails = null;
    if (Object.keys(props.selectedCityObject).length > 0) {
        cityDetails = (
            <React.Fragment>
                <h3>{props.selectedCityObject.cityName}</h3>
                <img src={`/images/${props.selectedCityObject.cityName.toLowerCase()}.jpg`} alt="scenery of city" />
                <p>{props.selectedCityObject.summary}</p>
            </React.Fragment>
        );
    }

    return <main className="col-8 main">{cityDetails}</main>;
};

export default MainComponent;
