import {apiService} from "./apiService";
import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/userInterface";
import {IResponse} from '../interfaces/responseInterface';

const userService = {
    getAll:():IResponse<IUser[]> => apiService.get('/users')
}
// цей запит завжди повертаэ Promis, axios повертає data, status... Promis завжди має дженерік. Аксіос має тип 'AxiosResponse' а вже AxiosResponse ми вставимо дженерік
export {
    userService
}