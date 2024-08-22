import ModeButtons from './ModeButtons.jsx';
import DescriptionCell from './DescriptionCell.jsx';
import RateCell from './RateCell.jsx';
import HoursCell from './HoursCell.jsx';
import { useState } from 'react';
import axios from 'axios';
import formatCurrency from '../utils/formatCurrency.js'

function TableRow({ initialIsEditing, initialInvoiceData, deleteFunc }) {
  // const {description, rate, hours} = initialInvoiceData

  const [editMode, setEditMode] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  // Define functions to set editMode back and forth
  const changeEditMode = () => setEditMode(true)
  const changeNormalMode = () => {
    const bodyObj = {
      id: initialInvoiceData.id,
      description,
      rate,
      hours
    }

    axios.put('/api/editInvoice', bodyObj)
      .then((res) => {
        alert(res.data.message)
        setDescription(res.data.updatedInvoice.description)
        setRate(res.data.updatedInvoice.rate)
        setHours(res.data.updatedInvoice.hours)

        setEditMode(false)
      })
    }

  return (
  <tr>
    <ModeButtons 
      isEditing={editMode} 
      editClick={changeEditMode}
      saveClick={changeNormalMode}
      deleteFunc={deleteFunc}
    />
    <DescriptionCell 
      isEditing={editMode} 
      value={description}
      onValueChange={setDescription}
    />
    <RateCell 
      isEditing={editMode} 
      value={rate} 
      onValueChange={setRate}
    />
    <HoursCell 
      isEditing={editMode} 
      value={hours} 
      onValueChange={setHours}
    />
    <td>{formatCurrency(rate * hours)}</td>
  </tr>
  )
}

export default TableRow