import {observable, computed} from 'mobx'
import EthNodeModel from '../models/EthNodeModel'


export default class EthStore {

  @observable node

  @computed get latestBlock() {
    if (this.node) {
      return this.node.latestBlock;
    }
    return 0;
  }

  setRpcAddress(address) {
    this.node = new EthNodeModel(this)
    this.node.setRpcAddress(address)
  }
}
