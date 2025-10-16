import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head title="search" />
      <div className="overflow-hidden flex flex-col w-full min-h-screen bg-slate-200">
        {children}
      </div>
    </>
  )
}
