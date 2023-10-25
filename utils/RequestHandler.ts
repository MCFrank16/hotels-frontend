import axios, { AxiosRequestConfig } from 'axios';


// react query request handler
export const RequestHandler = (props: AxiosRequestConfig): Promise<any> => {
    return axios({ ...props });
}
