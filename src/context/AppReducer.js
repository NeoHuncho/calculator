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
            const splice = state.input.splice(state.input.length-1,1);
            console.log(splice)
        return {
                ...state,
                number: (Math.floor(state.number / 10))
           
             
            };


        default:
            return state;
    }
}