const remoteURL = "http://localhost:8088"

export const getGarmentById = (garmentId) => {
    return fetch(`${remoteURL}/garments/${garmentId}?_expand=type&_expand=color&_expand=occasion&_expand=condition&_expand=season&_expand=purchaseDate`)
        .then(res => res.json())
}

export const getAllGarments = () => {
    return fetch(`${remoteURL}/garments?_expand=color`)
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

export const updateGarment = (editedGarment) => {
    return fetch(`${remoteURL}/garments/${editedGarment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGarment)
    }).then(data => data.json());
  }

  export const deleteGarment = (id) => {
    return fetch(`${remoteURL}/garments/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }