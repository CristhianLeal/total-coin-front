import { createButtons } from "../../services"

const AddButton = ({setRefetch}) => {
  const handleClick = async() => {
    try {
      await createButtons()
      setRefetch(prev => !prev)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button 
      className="btn btn-success position-fixed bottom-0 end-0"
      onClick={handleClick} 
      >
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
  )
}

export default AddButton
