import { deleteButton } from "../../services";
const ButtonDelete = ({id}) => {
  const handleClick = () => {
    localStorage.setItem('id', id);
    deleteButton()
    window.location.reload();
  }

  return (
    <div>
      <button 
        className="btn btn-danger"
        onClick={handleClick} 
      >
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  )
}

export default ButtonDelete