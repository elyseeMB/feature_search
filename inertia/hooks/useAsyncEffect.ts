import { useEffect } from 'react'

type Props = {
  cb: (...args: any[]) => any
  dsp: readonly unknown[]
}

export function useAsyncEffect(cb: Props['cb'], deps: Props['dsp']) {
  useEffect(() => {
    cb()
  }, deps)
}
