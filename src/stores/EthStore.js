import {observable, computed} from 'mobx'
import EthNodeModel from '../models/EthNodeModel'


export default class EthStore {

  @observable node

  @computed get latestBlockNumber() {
    return (this.node ? this.node.latestBlockNumber : 0)
  }

  @computed get latestBlocks() {
    return (this.node ? this.node.latestBlocks : [])
  }

  setRpcAddress(address) {
    this.node = new EthNodeModel(this)
    this.node.setRpcAddress(address)
  }
}
