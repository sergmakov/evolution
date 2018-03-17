import { observable } from 'mobx';

export default class GlobalContainerModel {
  @observable message = '';
  @observable results = [];
}
