
const initialState = {
    state_value: {},
}

export function boardReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET+___':
            newState = { ...state, state_value: action.state_value }
            break;
    }
    return newState;
}