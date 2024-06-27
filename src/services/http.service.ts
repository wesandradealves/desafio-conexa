import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"
import {EHttpMethod} from "@/types";

class HttpService {
    private http:AxiosInstance;
    private baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    constructor() {
        this.http = axios.create({
            baseURL: this.baseURL,
            withCredentials: false,
            headers: this.setupHeaders()
        })
    }
    private setupHeaders(hasAttachment = false) {
        return hasAttachment
            ? { "Content-Type": "multipart/form-data" }
            : { "Content-Type": "application/json"};
    }

    private async request<T>(
        method: EHttpMethod,
        url: string,
        options: AxiosRequestConfig
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.http.request<T>({
                method,
                url,
                ...options,
            });

            return response.data;
        } catch (error) {
            return this.normalizeError(error);
        }
    }

    public async get<T>(
        url: string,
        params?: any,
        hasAttachment = false
    ): Promise<T> {
        return this.request<T>(EHttpMethod.GET, url, {
            params,
            headers: this.setupHeaders(hasAttachment),
        });
    }    

    public async put<T>(
        url: string,
        body: any,
        params?: any,
        hasAttachment = false
    ): Promise<T> {
        return this.request<T>(EHttpMethod.PUT, url, {
            data: body, 
            params,
            headers: this.setupHeaders(hasAttachment),
        });
    }

    private normalizeError(error: any) {
        return Promise.reject(error);
    }
}

export {HttpService}
