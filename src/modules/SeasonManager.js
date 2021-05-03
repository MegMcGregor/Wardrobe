const remoteURL = "http://localhost:8088"

export const getAllSeasons = () => {
    return fetch(`${remoteURL}/seasons`)
        .then(res => res.json())
}