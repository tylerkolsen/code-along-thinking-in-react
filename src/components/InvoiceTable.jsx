import './InvoiceTable.css';
import ModeButtons from './ModeButtons.jsx';
import DescriptionCell from './DescriptionCell.jsx';

function InvoiceTable() {
  return (
    <div>
      InvoiceTable goes Here
      <DescriptionCell isEditing={true} value={'description'}/>
    </div>
  )
}

export default InvoiceTable