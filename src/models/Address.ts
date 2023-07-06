import {GeoPosition} from "./GeoPosition";

export interface Address {
    "street": string
    "suite": string
    "city": string
    "zipcode": string
    "geo": GeoPosition
}
