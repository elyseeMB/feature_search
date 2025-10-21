import { SearchForm } from '~/components/search-form.js'
import { BreadcrumbItem, withAppLayout } from '~/layout/layout.js'

const breadcrumbItem: BreadcrumbItem[] = [
  {
    title: 'Film',
    href: '#',
  },
]

export default withAppLayout(breadcrumbItem, (props: any) => {
  return (
    <>
      <SearchForm className="p-4" value={props.q} />
    </>
  )
})
