import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const usersAPI = {
    getUsers() {
        return instance.get('users')
    },

    addUser(name, login, password, email, avatar, status) {
        return instance.post('users', {id: getLastId() + 1, name, login, password, email, avatar, status})
    },

    updateUser(id, name, login, password, email, avatar, status) {
        return instance.put('users/' + id, {id, name, login, password, email, avatar, status})
    }
}

function getLastId() {
    usersAPI.getUsers().then(response => {
        return response.data[response.data.length - 1].id
    })
}

