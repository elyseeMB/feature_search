import { Form } from '@inertiajs/react'
import { Search } from 'lucide-react'

import { Label } from '~/components/ui/label'
import { SidebarGroup, SidebarGroupContent, SidebarInput } from '~/components/ui/sidebar'
import { Spinner } from './ui/spinner.js'

export function SearchForm({
  value,
  ...props
}: Omit<React.ComponentProps<'form'>, 'action' | 'method' | 'children'> & { value: string }) {
  return (
    <Form action={`/search`} method="GET" {...(props as any)}>
      {({ processing }) => {
        return (
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SidebarInput
                name="q"
                id="search"
                defaultValue={value}
                placeholder="Search the docs..."
                className="pl-8"
                disabled={processing}
              />

              <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
              {processing && (
                <>
                  <Spinner />
                </>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        )
      }}
    </Form>
  )
}
