// This component will either show two buttons: delete and save, or will show one button: save

function ModeButtons({ isEditing }) {
  // I expect TableRow to pass down 'isEditing' as a boolean value to all its children
  
  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button>Delete</button>
      <button>Edit</button>
    </td>
  )
}

export default ModeButtons