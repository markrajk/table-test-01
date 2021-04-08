// import 'fixed-data-table-2/dist/fixed-data-table.css'
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { Table, Column, Cell } from 'fixed-data-table-2'
// import getData from './getData'
// import useWindowSize from './useWindowSize'
// import './index.css'
// import Dimensions from 'react-dimensions'

// function App() {
//   const data = getData()
//   const windowSize = useWindowSize()
//   // const { height, width, containerHeight, containerWidth, ...props } = props

//   const [columnOrder, setColumnOrder] = useState([
//     'teamMember',
//     'attitude',
//     'productivity',
//     'teamworking',
//     'averageFeedback',
//     'amountOfGivenFeedback',
//   ])

//   const [columnWidths, setColumnWidths] = useState({
//     teamMember: windowSize.width / columnOrder.length,
//     attitude: windowSize.width / columnOrder.length,
//     productivity: windowSize.width / columnOrder.length,
//     teamworking: windowSize.width / columnOrder.length,
//     averageFeedback: windowSize.width / columnOrder.length,
//     amountOfGivenFeedback: windowSize.width / columnOrder.length,
//   })
//   // const [columnWidths, setColumnWidths] = useState({
//   //   teamMember: 1167 / columnOrder.length,
//   //   attitude: 1167 / columnOrder.length,
//   //   productivity: 1167 / columnOrder.length,
//   //   teamworking: 1167 / columnOrder.length,
//   //   averageFeedback: 1167 / columnOrder.length,
//   //   amountOfGivenFeedback: 1167 / columnOrder.length,
//   // })

//   var fixedColumns = ['teamMember']

//   function _onColumnResizeEndCallback(newColumnWidth, columnKey) {
//     console.log(newColumnWidth, columnKey)
//     setColumnWidths({
//       ...columnWidths,
//       [columnKey]: newColumnWidth,
//     })
//   }

//   function _onColumnReorderEndCallback(event) {
//     console.log(event)
//     var columnOrderNew = columnOrder.filter((columnKey) => {
//       return columnKey !== event.reorderColumn
//     })

//     if (event.columnAfter) {
//       var index = columnOrderNew.indexOf(event.columnAfter)
//       columnOrderNew.splice(index, 0, event.reorderColumn)
//     } else {
//       if (fixedColumns.indexOf(event.reorderColumn) !== -1) {
//         columnOrderNew.splice(fixedColumns.length - 1, 0, event.reorderColumn)
//       } else {
//         columnOrderNew.push(event.reorderColumn)
//       }
//     }
//     console.log(columnOrder, columnOrderNew)
//     setColumnOrder([...columnOrderNew])
//   }

//   return (
//     <div className="App">
//       <Table
//         rowHeight={39}
//         rowsCount={data.length}
//         headerHeight={35}
//         // width={1167}
//         onColumnResizeEndCallback={_onColumnResizeEndCallback}
//         isColumnResizing={false}
//         onColumnReorderEndCallback={_onColumnReorderEndCallback}
//         isColumnReordering={false}
//         touchScrollEnabled={true}
//         width={windowSize.width}
//         height={windowSize.height}
//         // height={430}
//         // width={containerWidth}
//         // height={containerHeight}
//         className="team-table"
//       >
//         {columnOrder.map(function (columnKey, i) {
//           if (columnKey === 'teamMember') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="team-table-body-item-img-wrapper">
//                           <img
//                             src="/img/p-01.png"
//                             alt="User"
//                             className="team-table-body-item-img"
//                           />
//                         </div>
//                         <p className="team-table-body-item-text">
//                           <span>Gregory Porter</span>&nbsp;- Senior Python
//                           Developer
//                         </p>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else if (columnKey === 'attitude') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="team-table-body-item-button green">
//                           Good
//                         </div>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else if (columnKey === 'productivity') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="team-table-body-item-button green">
//                           Good
//                         </div>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else if (columnKey === 'teamworking') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="team-table-body-item-button green">
//                           Good
//                         </div>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else if (columnKey === 'averageFeedback') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="stars">
//                           <div className="star full">
//                             <i className="icon-star"></i>
//                           </div>
//                           <div className="star full">
//                             <i className="icon-star"></i>
//                           </div>
//                           <div className="star full">
//                             <i className="icon-star"></i>
//                           </div>
//                           <div className="star full">
//                             <i className="icon-star"></i>
//                           </div>
//                           <div className="star">
//                             <i className="icon-star"></i>
//                           </div>
//                         </div>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else if (columnKey === 'amountOfGivenFeedback') {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <div className="team-table-body-item">
//                         <div className="team-table-body-item-progress-wrapper">
//                           <div className="team-table-body-item-progress">
//                             <div className="team-table-body-item-progress-bar green">
//                               <p className="team-table-body-item-progress-bar-label">
//                                 12
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           } else {
//             return (
//               <Column
//                 allowCellsRecycling={true}
//                 columnKey={columnKey}
//                 key={i}
//                 isReorderable={true}
//                 header={<Cell>{columnKey}</Cell>}
//                 cell={({ rowIndex, columnKey }) => {
//                   return (
//                     <Cell>
//                       <img
//                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wtq8Ba65R83DACEJxDR9GgHaHa%26pid%3DApi&f=1"
//                         alt=""
//                         style={{ width: '35px', height: '35px' }}
//                       />
//                       {data[rowIndex][columnKey]}
//                     </Cell>
//                   )
//                 }}
//                 fixed={fixedColumns.indexOf(columnKey) !== -1}
//                 isResizable={true}
//                 width={columnWidths[columnKey]}
//                 // flexGrow={1}
//               />
//             )
//           }
//         })}
//       </Table>
//     </div>
//   )
// }

// export default Dimensions({
//   getHeight: function (element) {
//     return window.innerHeight - 200
//   },
//   getWidth: function (element) {
//     var widthOffset = window.innerWidth < 680 ? 0 : 240
//     return window.innerWidth - widthOffset
//   },
// })(App)

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
