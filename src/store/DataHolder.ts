import { action, observable } from 'mobx';

enum DataHolderState {
  READY = 0,
  LOADING = 2,
  ERROR = 500,
}

interface IDataHolderError {
  type?: string;
  code?: string;
  msg: string;
}

export interface IDataHolderState {
  isLoading(): boolean;
  isError(): boolean;
  isReady(): boolean;
}

export class DataHolder<T> implements IDataHolderState {
  @observable.ref public d!: T;
  @observable.ref public error?: IDataHolderError;

  @observable private _state!: DataHolderState;

  constructor(data?: T) {
    if (data) {
      this.setData(data);
    } else {
      this.setLoading();
    }
  }

  @action
  public setLoading() {
    this.d = undefined as any;
    this._state = DataHolderState.LOADING;
    return this;
  }

  @action
  public setData(data: T) {
    this.d = data;
    this._state = DataHolderState.READY;
    return this;
  }

  @action
  public setError(error: IDataHolderError) {
    this.d = undefined as any;
    this.error = error;
    this._state = DataHolderState.ERROR;
    return this;
  }

  public isReady() {
    return this._state === DataHolderState.READY;
  }

  public isLoading() {
    return this._state === DataHolderState.LOADING;
  }

  public isError() {
    return this._state === DataHolderState.ERROR;
  }
}
