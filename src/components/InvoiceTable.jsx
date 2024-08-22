import './InvoiceTable.css';
import TableRow from './TableRow.jsx';
import TableHeader from './TableHeader.jsx';
import AddRowButton from './AddRowButton.jsx';
import { useState } from 'react';

let globalId = 4

function InvoiceTable({ initialData }) {

  const [currentData, setCurrentData] = useState(initialData)

  const rows = currentData.map((invoiceItem) => {
    return (
      <TableRow 
        key={invoiceItem.id}
        initialIsEditing={false}
        initialInvoiceData={invoiceItem}
        deleteFunc={() => deleteRow(invoiceItem.id)}
      />
    )
  })

  // In order to give our addRowButton the ability to add a value to 'currentData',
  // we'll need a function:
  const addRow = () => {
    // create a new object to represent a new "row" or entry in the currentData array
    const newRow = {
      // id: currentData.length,
      id: globalId,
      description: 'Description',
      rate: '',
      hours: ''
    }
    // add 'newRow' to 'currentData'
    setCurrentData([...currentData, newRow])
    globalId++
  }

  // Delete function:
  const deleteRow = (id) => {
    const filteredData = currentData.filter((el) => el.id !== id)
    setCurrentData(filteredData)
  }

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {rows}
        </tbody>
        <tfoot>
          <AddRowButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable