import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7a436226f5764dca84a344ce55531682'
    }
});