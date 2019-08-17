const fetchGet = (url, abortSignal) => {
    let init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
        },
        signal: abortSignal
    };

    return fetch(url, init);
}

const fetchPost = (url, data) => {
    debugger;
    let init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Pragma': 'no-cache'
        },
        body: JSON.stringify(data)
    };

    return fetch(url, init);
}

const fetchPostFile = (url, data) => {
    let init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Pragma': 'no-cache'
        },
        body: data
    };

    return fetch(url, init);
}

const fetchDelete = (url, data) => {
    let init = {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Pragma': 'no-cache'
        },
        body: data
    };

    return fetch(url, init);
}

export const FetchService = {
    fetchGet,
    fetchPost,
    fetchPostFile,
    fetchDelete,
}