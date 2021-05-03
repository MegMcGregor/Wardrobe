const remoteURL = "http://localhost:8088"

export const getAllDates = () => {
    return fetch(`${remoteURL}/purhcaseDates`)
        .then(res => res.json())
}