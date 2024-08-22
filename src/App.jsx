import { useEffect, useState } from 'react';
import './App.css';
import InvoiceTable from './components/InvoiceTable.jsx';
import axios from 'axios';

function App() {
  // Get TEST_DATA from server
  // Due to how state works, we've had to add useEffect here and in the InvoiceTable.jsx
  // file in order to get the data to pass down correctly.
  const [invoiceData, setInvoiceData] = useState([])
  
  useEffect(() => {
    axios.get('/api/invoices')
    .then((res) => {
      setInvoiceData(res.data.invoices)
    })
  }, [])

  return (
      <InvoiceTable initialData={invoiceData} />
  );
}

export default App;
