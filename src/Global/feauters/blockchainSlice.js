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
    arenaPrice: 0.2,
    arenaTsupply: 0,
    charTsupply: 0,
    characterWl: false,
    charWlenabled: false,
    arenaWlenabled: false,
    arenaWl: false
    
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
                state.characterWl = action.payload.characterWl
                state.arenaWl = action.payload.arenaWl
                state.charWlenabled  = action.payload.charWlenabled
                state.arenaWlenabled = action.payload.arenaWlenabled
            } else {
                state.account = null
                state.balance = 0
                state.totalSupply = 0
                state.arenaWl = false
                state.characterWl = false
                state.charWlenabled = false
                state.arenaWlenabled = false
            }
        }
    }
})

export const { connect } = blockchainSlice.actions
export default blockchainSlice.reducer