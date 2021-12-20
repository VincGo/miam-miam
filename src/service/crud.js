import axios from "axios";

const crud = {

    async get(entity) {
        try {
            const response = await axios
                .get(`${process.env.REACT_APP_API}/${entity}?page=1`)
            return response.data["hydra:member"]
        } catch (err) {
            console.error(err)
        }
    },

    async getSingle(entity, id) {
        try {
            const response = await axios
                .get(`${process.env.REACT_APP_API}/${entity}/${id}`)
            return response.data
        } catch (err) {
            console.error(err)
        }
    },

    async add(entity, data) {
        try {
            const response = await axios
                .post(`${process.env.REACT_APP_API}/${entity}`, data)
            return response.data
        } catch (err) {
            console.error(err)
        }
    },

    async edit(entity, id, data) {
        try {
            const response = await axios
                .put(`${process.env.REACT_APP_API}/${entity}/${id}`, data)
            return response.data
        } catch (err) {
            console.error(err)
        }
    },

    async delete(entity, id) {
        try {
            const response = await axios
                .delete(`${process.env.REACT_APP_API}/${entity}/${id}`)
            return response.data
        } catch (err) {
            console.error(err)
        }
    },
}

export default crud