export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',
    headers: {
        authorization: 'dd9cf07b-6aff-44f1-b3aa-ee93c9db031f',
        'Content-Type': 'application/json'
    }
};

export const getInitialCards = () => {
    return fetch(config.baseUrl + '/cards', {
        headers: config.headers
    });
};

export const getUserInfo = () => {
    return fetch(config.baseUrl + '/users/me', {
        headers: config.headers
    })
};

export const postUserInfo = (userName, userDesc) => {
    return fetch(config.baseUrl + '/users/me', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userDesc
        })
    });
};

export const postNewCard = (cardName, cardUrl) => {
    return fetch(config.baseUrl + '/cards', {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardName,
            link: cardUrl
        })
    });
};

export const deleteCardRequest = (cardId) => {
    return fetch(config.baseUrl + '/cards/' + cardId, {
        method: 'DELETE',
        headers: config.headers
    });
};

export const putCardLike = (cardId) => {
    return fetch(config.baseUrl + '/cards/likes/' + cardId, {
        method: 'PUT',
        headers: config.headers
    });
};

export const deleteCardLike = (cardId) => {
    return fetch(config.baseUrl + '/cards/likes/' + cardId, {
        method: 'DELETE',
        headers: config.headers
    });
};

export const patchAvatar = (avatarURL) => {
    return fetch(config.baseUrl + '/users/me/avatar', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarURL
        })
    });
};