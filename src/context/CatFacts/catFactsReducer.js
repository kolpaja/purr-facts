
const catFactsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_FACTS':
            return {
                ...state,
                catFacts: action.payload,
                loading: false,
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }

        case 'GET_FACT':
            return {
                ...state,
                fact: action.payload,
                loading: false,
            }

        case 'DELETE_FACT':
            return {
                ...state,
                catFacts: catFacts.filter(fact => fact.id !== payload.id),
            }

        default:
            return state;
    }
}

export default catFactsReducer;