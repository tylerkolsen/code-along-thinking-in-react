import './InvoiceTable.css';
import TableRow from './TableRow.jsx';
import TableHeader from './TableHeader.jsx';
import AddRowButton from './AddRowButton.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

// let globalId = 4

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

  useEffect(() => {
    setCurrentData(initialData)
  }, [initialData])

  // In order to give our addRowButton the ability to add a value to 'currentData',
  // we'll need a function:
  const addRow = () => {
    // create a new object to represent a new "row" or entry in the currentData array
    const newRow = {
      // id: currentData.length,
      // id: globalId, we are removing this as we've added it to the backend
      description: 'Description Placeholder',
      rate: '1',
      hours: '1'
    }

    axios.post('/api/addInvoice', newRow)
      .then((res) => {
        setCurrentData([...currentData, res.data.newInvoice])

      })
    // add 'newRow' to 'currentData'

  }

  // Delete function:
  const deleteRow = (id) => {
    axios.delete(`api/deleteInvoice/${id}`)
      .then((res) => {
        // Need to reset current data to the filtered array
        setCurrentData(res.data.invoices)
      })
    // const filteredData = currentData.filter((el) => el.id !== id) // we've now put this logic on the backend, so we don't need this anymore
    // setCurrentData(filteredData)
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