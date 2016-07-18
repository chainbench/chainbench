import {
    observable
} from 'mobx'
import Web3 from 'web3'

export default class EthNodeModel {
    store
    @observable nodeConnected
    @observable blocks
    @observable rpcAddress
    @observable latestBlock
    web3

    constructor(store) {
        this.store = store
        this.blocks = []
        this.latestBlock = 0
    }

    watchForNewBlocks() {
        var filter = this.web3.eth.filter('latest')
        filter.watch((error, hash) => {
            if (!error) {
              var block = this.web3.eth.getBlock(hash, true)
              this.blocks.push(block)
              this.latestBlock = block.number
            }
        });
    }

    setRpcAddress(rpcAddress) {
        this.rpcAddress = rpcAddress
        this.web3 = new Web3(new Web3.providers.HttpProvider(rpcAddress))
        this.latestBlock = this.web3.eth.blockNumber
        this.watchForNewBlocks()
    }

    loadLatestBlocks() {
        var eth = this.web3.eth
        var latest = eth.blockNumber
    }

}
