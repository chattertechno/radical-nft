import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import Abi from './abi.json'
import CharAbi from "./charAbi.json"
import { store } from "../store"


export const web3connect = async () => {


    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org',
                },
                chainId: 56,
            }
        }
    }

    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
    })

    try {
        const provider = await web3Modal.connect();

        await web3Modal.toggleModal()
        const web3 = new Web3(provider)
        const contract = new web3.eth.Contract(Abi, '0xb2d498D7662c0DCb12c36030FdcF9859C1A906f2')
        
        const accounts = await web3.eth.getAccounts()
        let totalSupply = await contract.methods.totalSupply().call()
        let balance = await web3.eth.getBalance(accounts[0]);
        let account = accounts[0]

        const characterContract = new web3.eth.Contract(CharAbi, store.getState().blockchain.characterContract)

        const characterWl = await characterContract.methods.whitelisted(account).call()
        const charWlenabled = await characterContract.methods.useWhitelist().call()

        const arenaContract = new web3.eth.Contract(Abi, store.getState().blockchain.arenaContract)

        const arenaWl = await arenaContract.methods.whitelisted(account).call()
        const arenaWlenabled = await arenaContract.methods.useWhitelist().call()

        return {
            account,
            totalSupply,
            balance,
            provider,
            characterWl,
            arenaWl,
            charWlenabled,
            arenaWlenabled
        }
    } catch (err) {
        console.log(err)
    }
}

export const disconnect = async () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org',
                },
                chainId: 56,
            }
        }
    }

    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
    })


    try {
        await web3Modal.clearCachedProvider()
        return null;
    } catch (err) {
        console.log(err)
    }
}


export const Mint = async (type, mintAmount) => {
    // 1 == characters,  2 == arena
    if (type === 1) {
        const web3 = new Web3(store.getState().blockchain.provider)
        const contract = new web3.eth.Contract(CharAbi, store.getState().blockchain.characterContract)
        let price = await contract.methods.fixedPrice().call()
        //const name = await contract.methods.name().call()
       // console.log(name)
        //console.log(price)
        //price /= 10**18
        try {
            await contract.methods.batchMintCharacter(mintAmount).send({
                from: store.getState().blockchain.account,
                value: price * mintAmount
            })
        } catch (err) {
            console.log(err)
        }
    } else {
        const web3 = new Web3(store.getState().blockchain.provider)
        const contract = new web3.eth.Contract(Abi, store.getState().blockchain.arenaContract)
        let price = await contract.methods.fixedPrice().call()
       // const name = await contract.methods.name().call()
       // console.log(name)
        //console.log(price)
        try {
            await contract.methods.batchMintArena(mintAmount).send({
                from: store.getState().blockchain.account,
                value: price * mintAmount
            })
        } catch (err) {
            console.log(err)
        }
    }


}