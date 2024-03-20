import Cookie from 'js-cookie';



const setCookie = (key, value) => {
    Cookie.set(key, value);
}

const getCookie = (key) => {
    return Cookie.get(key);
}

const removeCookie = (key) => {
    return Cookie.remove(key);
}


export const getToken = () => {
    return getCookie('access_token');
}

export const setToken = (token) => {
    return setCookie('access_token', token);
}

export const removeToken = () => {
    return removeCookie('access_token');
}

export const removeUser = () => {
    return removeCookie('user');
}

export const setUser = (user) => {
    setCookie('user', window.btoa(JSON.stringify(user)));
}

export const getUser = () => {
    
    const user = getCookie('user') ?  window.atob(getCookie('user')) : null;

    try {
        return user ? JSON.parse(user) : null;
    } catch (err) {

    }

    return null;
}

export const removeAllCookie = () => {
    removeToken()
    removeUser();
} 