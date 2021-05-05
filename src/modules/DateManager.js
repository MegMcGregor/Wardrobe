const remoteURL = "http://localhost:8088"

export const getAllPurchaseDates = () => {
    return fetch(`${remoteURL}/purhcaseDates`)
        .then(res => res.json())
}