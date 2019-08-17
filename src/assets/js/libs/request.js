function request(url, type = "GET") {
    return fetch(url, { method: type }).then(response => response.json());
}

export {
    request
}