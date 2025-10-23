import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Input } from '../input.js'
import { Button } from '../button.js'
import { ChevronDown } from 'lucide-react'
import { Table } from '@tanstack/react-table'
import { Film } from '~/pages/film.js'

export function HeaderTable({
  table,
  meta,
}: {
  table: Table<Film>
  meta: { currentPage: number; lastPage: number; total: number }
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <Input
        placeholder="Rechercher un film..."
        value={(table.getColumn('primaryTitle')?.getFilterValue() as string) ?? ''}
        onChange={(event) => table.getColumn('primaryTitle')?.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
      <div className="flex items-center gap-2">
        {meta && (
          <div className="text-sm text-muted-foreground">
            Page {meta.currentPage} sur {meta.lastPage} ({meta.total} films)
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Colonnes <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
