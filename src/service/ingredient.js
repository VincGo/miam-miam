import axios from "axios"
const ingredient = {
    async get(){
        try {
            const response = await axios
                .get("http://127.0.0.1:8000/api/ingredients?page=1")
            return response.data['hydra:member']
        } catch (err) {
            return console.log(err)
        }
    },

    async add(ingredient) {
        try {
            const response = await axios
                .post("http://127.0.0.1:8000/api/ingredients", ingredient)
            return response.data
        } catch (err) {
            return console.log(err)
        }
    },

    async edit(id, ingredient) {
        try {
            const response = await axios
                .put(`http://127.0.0.1:8000/api/ingredients/${id}`, ingredient)
            return response.data
        } catch (err) {
            return console.log(err)
        }
    },

    async delete(id) {
        try {
            const response = await axios
                .delete(`http://127.0.0.1:8000/api/ingredients/${id}`)
            return response.data
        } catch (err) {
            return console.log(err)
        }
    }
}

export default ingredient