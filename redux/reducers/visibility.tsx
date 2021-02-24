
export default function (state = {},action){
    switch (action.type){
        case 'UPDATE_VISIBLE':
            return {...state,visible:action.payload}
        default:
            return state
    }
}