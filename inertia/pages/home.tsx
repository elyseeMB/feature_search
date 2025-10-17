import { router } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import { SearchForm } from '~/components/search-form.js'
import Layout from '~/layout/layout.js'

export default function Home(props: any) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    console.log(props)

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
        <SearchForm onSubmit={handleSubmit} className="p-4" value={props.q} />
      </Layout>
    </>
  )
}
