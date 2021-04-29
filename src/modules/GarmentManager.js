const remoteURL = "http://localhost:8088"

export const getGarmentById = (garmentId) => {
    return fetch(`${remoteURL}/garments/${garmentId}?_expand=type`)
    .then(res => res.json())
}

export const getAllGarments = () => {
    return fetch(`${remoteURL}/garments`)
    .then(res => res.json())
}
