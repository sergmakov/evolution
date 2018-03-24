import { observable } from 'mobx';

export default class GlobalContainerModel {
  @observable message = '';
  @observable results = [];
  @observable progress = 0;
  @observable spentTime = 0;
}
