import axios from "axios"
const ingredient = {
    get(){
        return axios
        .get("http://127.0.0.1:8000/api/ingredients?page=1")
        .then((response) => response.data['hydra:member'])
        .catch((err) => console.log(err))
    }
}

export default ingredient