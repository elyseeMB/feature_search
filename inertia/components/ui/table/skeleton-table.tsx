import { Fragment } from 'react/jsx-runtime'
import { Skeleton } from '../skeleton.js'
import { TableCell, TableRow } from './table.js'

export function SkeletonTable({ length }: { length: number }) {
  return (
    <Fragment>
      {Array.from({ length }).map((_, rowIndex) => (
        <TableRow key={`skeleton-${rowIndex}`}>
          {Array.from({ length: length - 1 }, (_, k) => (
            <TableCell key={k}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </Fragment>
  )
}
