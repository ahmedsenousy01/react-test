import axios, { AxiosResponse } from "axios";
import { getTokenHeader, getRefreshToken, setNewRefreshAndAccessTokens } from "../auth/Token"

const API_BASE_URL = "/api/v1";
const server = axios.create({
    baseURL: API_BASE_URL
});

export async function get(path: string, additionalHeaders?: object) {
    return await server.get(path,
        {
            headers: {
                ...getTokenHeader(),
                ...additionalHeaders
            }
        });
}

export async function post(path: string, body: unknown, additionalHeaders?: object) {
    return await server.post(path, body,
        {
            headers: {
                ...getTokenHeader(),
                ...additionalHeaders
            }
        });
}

export async function put(path: string, body: unknown, additionalHeaders?: object) {
    return await server.put(path, body,
        {
            headers: {
                ...getTokenHeader(),
                ...additionalHeaders
            }
        });
}

export async function del(path: string, additionalHeaders?: object) {
    return await server.delete(path,
        {
            headers: {
                ...getTokenHeader(),
                ...additionalHeaders
            }
        });
}

export async function authorizeReq(fn: (path: string, body?: unknown) => Promise<AxiosResponse>, path: string, body: unknown = null) {
    let response;
    let data = null;
    if (body === null) {
        response = await fn(path);
    }
    response = await fn(path, body);

    data = response.data;
    if (!data.status && data.message === "token expired") {
        response = await server.post("/get-access-token", {
            refresh_token: getRefreshToken()
        })
        setNewRefreshAndAccessTokens(response.data.access_token, response.data.refresh_token);
        if (body === null) return await fn(path);
        return await fn(path, body);
    }

    return response;
}