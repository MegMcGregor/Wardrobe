const remoteURL = "http://localhost:8088"

export const getAllConditions = () => {
    return fetch(`${remoteURL}/conditions`)
        .then(res => res.json())
}