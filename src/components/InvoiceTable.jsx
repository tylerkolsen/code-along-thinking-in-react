import './InvoiceTable.css';
import TableRow from './TableRow.jsx';
import TableHeader from './TableHeader.jsx';
import AddRowButton from './AddRowButton.jsx';


function InvoiceTable({ initialData }) {

  const rows = initialData.map((invoiceItem) => {
    return (
      <TableRow 
        key={invoiceItem.id}
        initialIsEditing={false}
        initialInvoiceData={invoiceItem}
      />
    )
  })

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
          <AddRowButton />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable