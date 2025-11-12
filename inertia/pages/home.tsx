import { Fragment } from '~/components/Fragment.js'
import { SearchForm } from '~/components/search-form.js'
import { BreadcrumbItem, withAppLayout } from '~/layout/layout.js'

const breadcrumbItem: BreadcrumbItem[] = [
  {
    title: 'Building Your Application',
    href: '#',
  },
  {
    title: 'test',
    href: '#',
  },
]

export default withAppLayout(breadcrumbItem, (props: any) => {
  console.log(props)

  return (
    <>
      <SearchForm className="p-4" value={props.q} />
      <Fragment source="/chat">Loading...</Fragment>
    </>
  )
})
