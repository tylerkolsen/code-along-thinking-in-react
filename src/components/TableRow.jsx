import ModeButtons from './ModeButtons.jsx';
import DescriptionCell from './DescriptionCell.jsx';
import RateCell from './RateCell.jsx';
import HoursCell from './HoursCell.jsx';
import { useState } from 'react';

function TableRow({ initialIsEditing, initialInvoiceData }) {
  // const {description, rate, hours} = initialInvoiceData

  const [editMode, setEditMode] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  // Define functions to set editMode back and forth
  const changeEditMode = () => setEditMode(true)
  const changeNormalMode = () => setEditMode(false)

  return (
  <tr>
    <ModeButtons 
      isEditing={editMode} 
      editClick={changeEditMode}
      saveClick={changeNormalMode}
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
    <td>{rate * hours}</td>
  </tr>
  )
}

export default TableRow