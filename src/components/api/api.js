export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',
    headers: {
        authorization: 'dd9cf07b-6aff-44f1-b3aa-ee93c9db031f',
        'Content-Type': 'application/json'
    }
};

export function handleFetchResults(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getInitialCardsRequest = () => {
    return fetch(config.baseUrl + '/cards', {
        headers: config.headers
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const getUserInfoRequset = () => {
    return fetch(config.baseUrl + '/users/me', {
        headers: config.headers
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const postUserInfoRequest = (userName, userDesc) => {
    return fetch(config.baseUrl + '/users/me', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userDesc
        })
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const postNewCardRequest = (cardName, cardUrl) => {
    return fetch(config.baseUrl + '/cards', {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardName,
            link: cardUrl
        })
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const deleteCardRequest = (cardId) => {
    return fetch(config.baseUrl + '/cards/' + cardId, {
        method: 'DELETE',
        headers: config.headers
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const putCardLikeRequest = (cardId) => {
    return fetch(config.baseUrl + '/cards/likes/' + cardId, {
        method: 'PUT',
        headers: config.headers
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const deleteCardLikeRequest = (cardId) => {
    return fetch(config.baseUrl + '/cards/likes/' + cardId, {
        method: 'DELETE',
        headers: config.headers
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};

export const patchAvatarRequest = (avatarURL) => {
    return fetch(config.baseUrl + '/users/me/avatar', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarURL
        })
    })
        .then((res) => {
            return handleFetchResults(res);
        });
};