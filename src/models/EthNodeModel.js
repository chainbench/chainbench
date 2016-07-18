import {observable} from 'mobx'
import Web3 from 'web3'
import times from 'lodash/times'

export default class EthNodeModel {
    store
    @observable nodeConnected
    @observable rpcAddress
    @observable latestBlockNumber
    @observable latestBlocks
    web3

    constructor(store) {
        this.store = store
        this.latestBlocks = []
        this.latestBlockNumber = 0
    }


    setRpcAddress(rpcAddress) {
        this.rpcAddress = rpcAddress
        this.web3 = new Web3(new Web3.providers.HttpProvider(rpcAddress))
        this.latestBlockNumber = this.web3.eth.blockNumber
        this.watchForNewBlocks()
        this.loadLatestBlocks()
    }

    watchForNewBlocks() {
        var filter = this.web3.eth.filter('latest')
        filter.watch((error, hash) => {
            if (!error) {
              var block = this.web3.eth.getBlock(hash, true)
              this.latestBlocks.push(block)
              this.latestBlockNumber = block.number
            }
        });
    }

    loadLatestBlocks() {
        const eth = this.web3.eth
        const latest = eth.blockNumber
        times(50, (index) => {
          const blockToGet = latest - index;
          this.latestBlocks.push(
            this.web3.eth.getBlock(blockToGet, true)
          )
        })
    }

}
