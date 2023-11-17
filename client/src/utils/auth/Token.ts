export function getTokenHeader() {
    return {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    };
}

export function getRefreshToken() {
    return localStorage.getItem("refresh_token");
}

export function setNewRefreshAndAccessTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
}