const remoteURL = "http://localhost:8088"

export const getAllColors = () => {
    return fetch(`${remoteURL}/colors`)
        .then(res => res.json())
}