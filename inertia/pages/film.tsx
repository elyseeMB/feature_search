import * as React from 'react'
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { BreadcrumbItem, withAppLayout } from '~/layout/layout.js'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table/table.js'
import { defineColumn } from '~/components/ui/table/column.js'
import { HeaderTable } from '~/components/ui/table/header-table.js'
import { FooterTable } from '~/components/ui/table/footer-table.js'
import { SkeletonTable } from '~/components/ui/table/skeleton-table.js'
import { Link, usePage } from '@inertiajs/react'
import { Route } from '@adonisjs/core/http'
import env from '#start/env'
import { ActionTable } from '~/components/ui/table/action-table'

export type Film = {
  id: number
  tconst: string
  titleType: string
  primaryTitle: string
  originalTitle: string
  isAdult: number
  startYear: number | null
  endYear: number | null
  runtimeMinutes: number | null
  genres: string
}

const breadcrumbItem: BreadcrumbItem[] = [
  {
    title: 'Films',
    href: '#',
  },
]

export default withAppLayout(breadcrumbItem, ({ ...props }) => {
  const { url } = usePage()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const films = props?.doc?.data || []
  const meta = props?.doc?.meta
  const columns = defineColumn<Film>([
    'primaryTitle',
    'genres',
    'tconst',
    'titleType',
    'runtimeMinutes',
    'startYear',
  ])

  const table = useReactTable({
    data: films,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <ActionTable />

      <HeaderTable table={table} meta={meta} />
      <div className="px-4">
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {films.length === 0 ? (
                <SkeletonTable length={8} />
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        <Link href={url + '/' + row.original.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Link>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Aucun film trouvé.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <FooterTable table={table} />
    </div>
  )
})
