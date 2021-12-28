import axios from "axios";

const type = {
  async get() {
    try {
      const response = await axios
        .get("http://127.0.0.1:8000/api/types?page=1")
      return response.data['hydra:member']
    } catch (err) {
      return console.log(err)
    }
  },

  async add(data) {
    try {
      const response = await axios
        .post("http://127.0.0.1:8000/api/types", data)
      return response.data
    } catch (err) {
      return console.log(err)
    }
  },

  async edit(id, data) {
    try {
      const response = await axios
        .put(`http://127.0.0.1:8000/api/types/${id}`, data)
      return response.data
    } catch (err) {
      return console.log(err)
    }
  },

  async delete(id) {
    try {
      const response = await axios
        .delete(`http://127.0.0.1:8000/api/types/${id}`)
      return response.data
    } catch (err) {
      return console.log(err)
    }
  },
}

export default type;