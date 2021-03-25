import axios from 'axios'

export const getPersonsList = ()=>{
    return axios
        .get('http://localhost:3001/persons')
        .then(response=>{
        const { data } = response
          return data
        })
}
export const addNewPerson = (obj)=>{
    const newObj = {
        name:obj.name,
        number: obj.number
    }
    return axios
        .post('http://localhost:3001/persons',newObj)
        .then(response=>{
            const { data } = response
            return data
        })
}
export const deleteUser = (userId)=>{
    console.log('borrar',`http://localhost:3001/persons/${userId}`)
    return axios
        .delete(`http://localhost:3001/persons/${userId}`)
}
export const updateNumber = (userId, userData)=>{
    console.log("update: ", `http://localhost:3001/persons/${userId}`)
    return axios
        .put(`http://localhost:3001/persons/${userId}`,userData)
}