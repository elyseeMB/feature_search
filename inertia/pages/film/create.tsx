import { BreadcrumbItem, withAppLayout } from '~/layout/layout.js'

const breadcrumbItem: BreadcrumbItem[] = [
  {
    title: 'Films',
    href: '/film',
  },
  {
    title: 'create',
    href: '#',
  },
]

export default withAppLayout(breadcrumbItem, () => {
  return <div>create</div>
})
