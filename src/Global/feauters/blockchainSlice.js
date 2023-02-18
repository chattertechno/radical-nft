import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    account: null,
    provider: null,
    balance: 0,
    totalSupply: 0,
    characterContract: '0xb2d498D7662c0DCb12c36030FdcF9859C1A906f2',
    arenaContract: '0x8Ab3E31B5E92CCD6c509606718D9eDD2c74B10E1',
    characterPrice: 0.1,
    arenaPrice: 0.2
    
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