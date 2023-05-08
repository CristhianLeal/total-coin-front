import { deleteButton } from "../../services";

const ButtonDelete = ({id,setRefetch}) => {
  const handleClick = async () => {
    try {
      await deleteButton(id)
      setRefetch(prev =>!prev)
    } catch (error) {
      console.error(error)
    }
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
