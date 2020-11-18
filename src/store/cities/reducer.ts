import { ICity } from './../../models/ICity';
import { CityState, CityActionTypes } from './types';


const initialCityState: CityState = {
    isFetching: false,
    errorMessage: '',
    cities: [] as ICity[]
};

export function CitiesReducer(state = initialCityState, action: { type: CityActionTypes; payload: any }): CityState {
    switch (action.type) {
        case CityActionTypes.FETCH_BOOTCAMPS_STARTED:
            return {
                ...state,
                isFetching: true
            }


        case CityActionTypes.FETCH_BOOTCAMPS_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload.errorMessage
            }

        case CityActionTypes.FETCH_BOOTCAMPS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cities: action.payload.cities
            }

        case CityActionTypes.ADD_BOOTCAMP:
            const cities = [...state.cities];

            const newCity: ICity = {
                id: cities.length + 1,
                cityName: action.payload.title,
                image: action.payload.imageUrl,
                summary: action.payload.details
            };
            cities.push(newCity);

            return {
                ...state,
                cities: cities
            }

        default:
            return state;

    }
}