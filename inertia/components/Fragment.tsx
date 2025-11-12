import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { usePage } from '@inertiajs/react'
import { PropsWithChildren, useState } from 'react'
import { useAsyncEffect } from '~/hooks/useAsyncEffect.js'

export function Fragment({
  source,
  children,
}: PropsWithChildren<{
  source: string
}>) {
  const [componentProps, setComponentProps] = useState<any>(null)
  const [Component, setComponent] = useState<any>(null)
  const assetVersion = usePage().version

  useAsyncEffect(async () => {
    const response = await fetch(source, {
      //@ts-ignore
      headers: {
        'X-Inertia': 'true',
        'X-Inertia-Fragment': 'true',
        'X-Inertia-Version': assetVersion,
      },
    })
    if (response.ok) {
      const data = await response.json()
      setComponentProps(data)
      const resolvedComponent = await resolvePageComponent(
        `../pages/${data.component}.tsx`,
        import.meta.glob('../pages/**/*.tsx')
      ).then((c) => {
        //@ts-ignore
        return c.default
      })
      setComponent(() => resolvedComponent)
    }
  }, [source, assetVersion])

  if (!Component) {
    return <div> {children} </div>
  }

  return <Component {...componentProps.props} />
}
