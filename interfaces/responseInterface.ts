import {AxiosResponse} from "axios";

export type IResponse<Data> = Promise<AxiosResponse<Data>>

