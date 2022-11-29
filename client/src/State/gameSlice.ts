import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: 0,
    clickPower: 10,
    currencyPerMs: .001
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        // increment currency 
        increment: (state, action) => {
            const newCurrency = parseFloat((state.currency + state.currencyPerMs * action.payload).toFixed(2))
            state.currency = newCurrency
        }
    }
})

// export actions
export const {
    increment
} = gameSlice.actions

// export reducer
export default gameSlice.reducer