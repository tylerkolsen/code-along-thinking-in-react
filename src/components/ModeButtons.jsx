// This component will either show two buttons: delete and save, or will show one button: save

function ModeButtons({ isEditing, editClick, saveClick, deleteFunc }) {
  // I expect TableRow to pass down 'isEditing' as a boolean value to all its children
  
  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={deleteFunc}>Delete</button>
      <button onClick={editClick}>Edit</button>
    </td>
  )
}

export default ModeButtons