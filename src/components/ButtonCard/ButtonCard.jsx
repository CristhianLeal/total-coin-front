import ButtonDelete from "../ButtonDelete/ButtonDelete"
import { editButton } from "../../services";

const ButtonCard = ({id,count}) => {
  const handleClickEdit = () => {
    editButton(id,count)
    window.location.reload()
  }
  return (
    <div className="d-flex flex-row align-content-center justify-content-center">
      <button 
        key={id}
        onClick={handleClickEdit}
        className='btn btn-primary col-8 my-2'>
        count is {count}
      </button>
      <div className="mx-2 my-2">
        <ButtonDelete id={id}/>
      </div>
    </div>
  )
}

export default ButtonCard