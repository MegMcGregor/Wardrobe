const remoteURL = "http://localhost:8088"

export const getGarmentById = (garmentId) => {
    return fetch(`${remoteURL}/garments/${garmentId}`)
        .then(res => res.json())
}

export const getAllGarments = () => {
    return fetch(`${remoteURL}/garments`)
        .then(res => res.json())
}

export const addGarment = (newGarment) => {
    return fetch(`${remoteURL}/garments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGarment)
    }).then(response => response.json())
}