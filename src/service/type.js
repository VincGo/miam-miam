import axios from "axios";

const type = {
    async get() {
        try{
            const response = await axios
                .get("http://127.0.0.1:8000/api/types?page=1")
            return response.data['hydra:member']
        } catch (err) {
            return console.log(err)
        }
    }
}

export default type;