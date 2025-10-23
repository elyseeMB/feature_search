import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Film } from '~/pages/film.js'
import { Button } from '../button.js'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

type Options = {
  actions?: boolean
}

export function defineColumn<T>(
  items: (keyof T)[],
  options: Options = {
    actions: true,
  }
): Array<ColumnDef<T>> {
  const columns: Array<ColumnDef<T>> = items.map((item) => ({
    accessorKey: item as string,
    header: () => <div> {item.toString()} </div>,
    cell: ({ row }) => (
      <div className="font-medium max-w-[150px] hover:cursor-pointer truncate">
        {row.getValue(item as string)}
      </div>
    ),
  }))

  if (options.actions) {
    columns.push({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const item = row.original
        // @ts-ignore
        const id = item.id
        // @ts-ignore
        const title = item.primaryTitle!

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Voir les détails</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
                Copier ID {title}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    } as ColumnDef<T>)
  }

  return columns
}

// export const filmColumns: ColumnDef<Film>[] = [
//   {
//     accessorKey: 'primaryTitle',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Titre
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => (
//       <div className="font-medium max-w-[150px] truncate">{row.getValue('primaryTitle')}</div>
//     ),
//   },
//   {
//     accessorKey: 'originalTitle',
//     header: 'Titre original',
//     cell: ({ row }) => {
//       const original = row.getValue('originalTitle') as string
//       const primary = row.getValue('primaryTitle') as string
//       return original !== primary ? (
//         <div className="text-sm text-muted-foreground max-w-[200px] truncate">{original}</div>
//       ) : (
//         <div className="text-sm text-muted-foreground">-</div>
//       )
//     },
//   },
//   {
//     accessorKey: 'titleType',
//     header: 'Type',
//     cell: ({ row }) => {
//       const type = row.getValue('titleType') as string
//       return <div className="capitalize w-[150px]">{type}</div>
//     },
//   },
//   {
//     accessorKey: 'startYear',
//     header: 'Année',
//     cell: ({ row }) => {
//       const year = row.getValue('startYear') as number | null
//       return <div className="w-[60px]">{year || '-'}</div>
//     },
//   },
//   {
//     accessorKey: 'runtimeMinutes',
//     header: () => <div className="text-right">Durée</div>,
//     cell: ({ row }) => {
//       const runtime = row.getValue('runtimeMinutes') as number | null
//       return <div className="text-right w-[80px]">{runtime ? `${runtime} min` : '-'}</div>
//     },
//   },
//   {
//     accessorKey: 'genres',
//     header: 'Genres',
//     cell: ({ row }) => {
//       const genres = row.getValue('genres') as string
//       return <div className="text-sm max-w-[150px] truncate">{genres || '-'}</div>
//     },
//   },
//   {
//     id: 'actions',
//     enableHiding: false,
//     cell: ({ row }) => {
//       const film = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem>Voir les détails</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(film.tconst)}>
//               Copier ID ({film.tconst})
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]
