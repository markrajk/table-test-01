import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import {
  Grid,
  DragDropProvider,
  Table,
  TableHeaderRow,
  TableColumnReordering,
  TableColumnResizing,
} from '@devexpress/dx-react-grid-material-ui'

import { generateRows } from './demo-data/generator'

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ])
  const [rows] = useState(generateRows({ length: 6 }))
  const [tableColumnExtensions] = useState([
    { columnName: 'gender', width: 100 },
  ])

  const [defaultColumnWidths] = useState([
    { columnName: 'name', width: 180 },
    { columnName: 'gender', width: 180 },
    { columnName: 'city', width: 180 },
    { columnName: 'car', width: 240 },
  ])

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <DragDropProvider />
        <Table columnExtensions={tableColumnExtensions} />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow />
      </Grid>
    </Paper>
  )
}
