// All API endpoints defined here

export const API_HOST = 'http://localhost:8000';
export const API_GET_TOKEN = `${API_HOST}/auth/token/obtain/`;
export const API_REFRESH_TOKEN = `${API_HOST}/auth/token/refresh/`;

export const API_USER_REGISTER = `${API_HOST}/users/register/`;
export const API_USER_REGISTER_CHECK = `${API_HOST}/users/check/`;

export const API_SEARCH_CELEB = `${API_HOST}/profile/search`;
export const API_CELEB_PROFILE = `${API_HOST}/profile/view`



export const API_MEDIA = `${API_HOST}/media`