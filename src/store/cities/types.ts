import { ICity } from './../../models/ICity';

export enum CityActionTypes {
    FETCH_BOOTCAMPS_STARTED = 'FETCH_BOOTCAMPS_STARTED',
    FETCH_BOOTCAMPS_SUCCESS = 'FETCH_BOOTCAMPS_SUCCESS',
    FETCH_BOOTCAMPS_FAILED = 'FETCH_BOOTCAMPS_FAILED',

    ADD_BOOTCAMP = "ADD_BOOTCAMP"
}

export type CityState = Readonly<{
    cities: ICity[];
    errorMessage: string;
    isFetching: boolean;
}>;



