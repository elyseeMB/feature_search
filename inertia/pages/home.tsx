import { router } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import { SearchForm } from '~/components/search-form.js'
import Layout from '~/layout/layout.js'

export default function Home(props: any) {
  console.log(props)
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    router.visit('/search', {
      method: 'get',
      data: { q: data.search },
      preserveState: true,
      preserveScroll: true,
    })
  }

  return (
    <>
      <Layout>
        <SearchForm onSubmit={handleSubmit} className="p-4" />
      </Layout>
    </>
  )
}
