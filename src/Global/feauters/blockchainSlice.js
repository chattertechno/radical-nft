import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    account: null,
    provider: null,
    balance: 0,
    totalSupply: 0,
    
}

export const blockchainSlice = createSlice({
    name: 'blockchain',
    initialState,
    reducers: {
        connect: (state, action) => {
            if (action.payload) {
                state.account = action.payload.account
                state.balance = action.payload.balance
                state.provider = action.payload.provider
                state.totalSupply = action.payload.totalSupply
            } else {
                state.account = null
                state.balance = 0
                state.totalSupply = 0
            }
        }
    }
})

export const { connect } = blockchainSlice.actions
export default blockchainSlice.reducer