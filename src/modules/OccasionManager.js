const remoteURL = "http://localhost:8088"

export const getAllOccasions = () => {
    return fetch(`${remoteURL}/occasions`)
        .then(res => res.json())
}