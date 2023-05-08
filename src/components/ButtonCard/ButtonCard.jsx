import ButtonDelete from "../ButtonDelete/ButtonDelete"
import { editButton } from "../../services";

const ButtonCard = ({id,count,setRefetch,number}) => {
  const handleClickEdit = async () => {
    try {
      await editButton(id,count)
      setRefetch(prev => !prev)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="d-flex flex-row align-content-center justify-content-center">
      <button 
        key={id}
        onClick={handleClickEdit}
        className='btn btn-primary col-8 my-2'>
          <span className="px-2">
            Button {number}
          </span>
          <span className="px-2">
            count is {count}
          </span>
      </button>
      <div className="mx-2 my-2">
        <ButtonDelete id={id} setRefetch={setRefetch} />
      </div>
    </div>
  )
}

export default ButtonCard
