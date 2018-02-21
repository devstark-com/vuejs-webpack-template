export default function PromiseDelegator () {
  this.delegates = {}

  return (key) => {
    if (!key) return this.delegates

    const delegate = (resolve, reject) => {
      this.delegates[key] = { resolve, reject }
    }

    if (this.delegates.hasOwnProperty(key)) {
      return {
        ...this.delegates[key],
        delegate
      }
    }
    return {
      resolve () {},
      reject () {},
      delegate
    }
  }
}

export const promiseDelegator = new PromiseDelegator()
