import data from '../asset/json/carData';
const carData = data;

const carBookReducer = (state = carData, action) => {
    switch (action.type) {
        case 'BOOKCAR': return state;
        default: return state;
    }
}

export default carBookReducer;