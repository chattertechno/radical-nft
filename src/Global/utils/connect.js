import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import Abi from './abi.json'


export const web3connect = async() => {
    let provider;

    // const radicalCharactersAbi = await fetch('/config/characters.json')
    // const rcharacterAbi = await radicalCharactersAbi.json()
    // const radicalArenaAbi = await fetch('/config/arena.json')
    // const rArenaAbi = await radicalArenaAbi.json()

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc : {
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
        const contract = new web3.eth.Contract(Abi,'0xb2d498D7662c0DCb12c36030FdcF9859C1A906f2')
        const accounts = await web3.eth.getAccounts()
        let totalSupply = await contract.methods.totalSupply().call()
        let balance = await web3.eth.getBalance(accounts[0]);
        let account = accounts[0]

        return {
            account,
            totalSupply,
            balance,
            provider
        }
    } catch (err) {
        console.log(err)
    }
}

export const disconnect = async() => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc : {
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
    } catch(err) {
        console.log(err)
    }
}