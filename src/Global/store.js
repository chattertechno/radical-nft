import { configureStore } from "@reduxjs/toolkit";
import blockchainSlice from "./feauters/blockchainSlice";

export const store = configureStore({
    reducer: {
        blockchain: blockchainSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['blockchain/connect'],
            ignoredPaths: ['blockchain.provider'],
        }
    })
})