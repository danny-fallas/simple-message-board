import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

export type AxiosConfigCustom = AxiosRequestConfig & { pendingCalls: number }
export type AxiosResponseCustom = AxiosResponse & { pendingCalls?: number }

interface Result {
    success: boolean,
    data?: any,
    error?: any,
};

export enum METHOD {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    DELETE = 'delete'
};

axios.defaults.baseURL = 'http://localhost:4200/v1/';

const request = async (instance: AxiosInstance, method: METHOD, URL: string, data?: any, headers?: AxiosRequestHeaders) => {
    let result: Result = {
        success: false,
        data: null,
        error: null
    };

    try {
        const response: AxiosResponseCustom = await instance({
            method: method,
            url: URL,
            data: data,
            headers: headers,
            timeout: 0
        });

        result.data = response.data;
        result.success = response.data.success !== undefined ? response.data.success : response.status < 400;
        result.error = response.data.error || null;
    } catch (error) {
        console.error('error@axios.ts ', error);
    } finally {
        return result;
    }
};

const apiGet = async (URL: string, headers?: AxiosRequestHeaders): Promise<Result> => request(axios, METHOD.GET, URL, null, headers);

const apiPost = async (URL: string, data?: any, headers?: AxiosRequestHeaders): Promise<Result> => request(axios, METHOD.POST, URL, data, headers);

const apiPatch = async (URL: string, data?: any, headers?: AxiosRequestHeaders): Promise<Result> => request(axios, METHOD.PATCH, URL, data, headers);

const apiDelete = async (URL: string): Promise<Result> => request(axios, METHOD.DELETE, URL);

const externalApiRequest = async (method: METHOD, URL: string, data?: any, headers?: AxiosRequestHeaders): Promise<Result> => request(axios.create(), method, URL, data, headers);

export {
    apiPost,
    apiGet,
    apiPatch,
    apiDelete,
    externalApiRequest
};
