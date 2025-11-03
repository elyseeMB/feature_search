import { Button } from '~/components/ui/button'
import { Link, usePage } from '@inertiajs/react'

export function ActionTable() {
  const { url } = usePage()

  return (
    <div className="w-full  p-4">
      <div className="flex items-center justify-end">
        <Link href={url + '/create'}>
          <Button className="cursor-pointer" variant="default">
            create
          </Button>
        </Link>
      </div>
    </div>
  )
}
