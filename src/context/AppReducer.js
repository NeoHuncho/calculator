export default (state, action) => {
    switch (action.type) {
        case 'INPUT_NUMBER':
            const array = state.input.concat(action.payload);
            return {
                ...state,
                input: array,
                number: Number(array.join(''))
            }
        case 'SYMBOL_HANDLER':
            return {
                ...state,
                history: state.number,
                number: null,
                input: [],
                symbol: action.payload

            }
        case 'RESULT':
            if (state.symbol === '*') {
                return {
                    ...state,
                    number: state.number * state.history,
                    history: null,
                    symbol: null,
                    input: []

                }
            }
            if (state.symbol === '-') {
                return {
                    ...state,
                    number: state.history - state.number,
                    history: null,
                    symbol: null,
                    input: []

                }
            }
            if (state.symbol === '+') {
                return {
                    ...state,
                    number: state.number + state.history,
                    history: null,
                    symbol: null,
                    input: []

                }
            }
            if (state.symbol === '/') {
                return {
                    ...state,
                    number: state.history / state.number,
                    history: null,
                    symbol: null,
                    input: []

                }
            }
            if (state.symbol === '%') {
                return {
                    ...state,
                    number: state.history % state.number,
                    history: null,
                    symbol: null,
                    input: []

                }
            }

            break;

        case 'CLEAR':
            return {
                ...state,
                number: null,
                history: null,
                symbol: null,
                input: []
            };
        case 'BACKSPACE':
           
        return {
               ...state,
                number: (Math.floor(state.number / 10)),
                input:state.input.slice(0, -1)
           
             
            };


        default:
            return state;
    }
}