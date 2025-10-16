import { Form } from '@inertiajs/react'
import { Input } from '~/components/input.js'
import Layout from '~/layout/layout.js'

export default function Home() {
  return (
    <>
      <Layout>
        <div className="h-full flex items-center justify-center p-5">
          <Form>
            <Input />
            <button>send</button>
          </Form>
        </div>
      </Layout>
    </>
  )
}
