import ModeButtons from './ModeButtons.jsx';
import DescriptionCell from './DescriptionCell.jsx';
import RateCell from './RateCell.jsx';
import HoursCell from './HoursCell.jsx';

function TableRow({ initialIsEditing, initialInvoiceData }) {
  // const description = initialInvoiceData.description
  // const rate = initialInvoiceData.rate
  // const hours = initialInvoiceData.hours
  const {description, rate, hours} = initialInvoiceData

  return (
  <tr>
    <ModeButtons isEditing={initialIsEditing} />
    <DescriptionCell isEditing={initialIsEditing} value={description}/>
    <RateCell isEditing={initialIsEditing} value={rate} />
    <HoursCell isEditing={initialIsEditing} value={hours} />
    <td>{rate * hours}</td>
  </tr>
  )
}

export default TableRow