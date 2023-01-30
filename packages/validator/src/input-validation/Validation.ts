/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class Validation<T> {
  private validationMap: Map<keyof T, T[keyof T] | null> = new Map()
  private subscriber: Set<() => unknown> = new Set()

  public set(key: keyof T, value: T[typeof key] | null) {
    this.validationMap.set(key, value)
    this.notifySubscribers()
  }

  public get(key: keyof T): T[typeof key] | null {
    return this.validationMap.get(key) || null
  }

  public delete(key: keyof T) {
    return this.validationMap.delete(key)
  }

  public clear() {
    this.validationMap = new Map()
    this.notifySubscribers()
  }

  public listen(listener: () => unknown) {
    this.subscriber.add(listener)
  }

  public unlisten(listener: () => unknown) {
    this.subscriber.delete(listener)
  }

  public clearSubscriber() {
    this.subscriber = new Set()
  }

  public isValid(key: keyof T) {
    return !this.validationMap.get(key)
  }

  public isAllValid() {
    if (this.validationMap.size === 0) {
      return true
    }
    const mapArray = Array.from(this.validationMap.values())
    return mapArray.every(value => {
      return value === null
    })
  }

  private notifySubscribers() {
    Array.from(this.subscriber).forEach(a => a())
  }
}
