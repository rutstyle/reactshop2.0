function hkReducer(state = { keywords: JSON.parse(localStorage['hk'] || "[]") }, action) {
    switch (action.type) {
        case "addHk":
            return Object.assign(Object.assign({}, { keywords: action.keywords }));
        default:
            return state;
    }
}

export {
    hkReducer
}