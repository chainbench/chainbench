import {observable, computed} from 'mobx'


export default class ViewStore {

  

  constructor(initialState) {
    if (! initialState) {
      initialState = require('./ViewStore.json')
    }
    this.state = initialState
  }

}
