import {Company} from "./Company";
import {Address} from "cluster";

export interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": string,
    "website": string,
    "company": Company
}



