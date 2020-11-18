import { ICity } from './../../models/ICity';
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { CityActionTypes, CityState } from "./types";

export const fetchCities = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(fetchCitiesRequest())
    }
}

const fetchCitiesRequest: ActionCreator<ThunkAction<Promise<any>, CityState, null, any>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchCitiesStarted());

        try {
            const response: Response = await fetch("https://react-bootcamps.azurewebsites.net/api/cities");
            const citiesResult = await response.json();
            dispatch(fetchCitiesSuccess(citiesResult));
        } catch (error) {
            console.log('there was an error fetching cities', error);
            dispatch(fetchCitiesFailed(error))
        }
    }
}


const fetchCitiesStarted = () => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_STARTED
});

const fetchCitiesSuccess = (cities: ICity[]) => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_SUCCESS,
    payload: {
        cities
    }
});



const fetchCitiesFailed = (errorMessage: string) => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_FAILED,
    payload: {
        errorMessage
    }
});

export const addBootcamp = (title: string, imageUrl: string, details: string) => ({
    type: CityActionTypes.ADD_BOOTCAMP,
    payload: {
        title,
        imageUrl,
        details
    }
})