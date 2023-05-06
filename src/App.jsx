import { useEffect, useState } from 'react'
import {AddButton} from './components/'
import {getButtons} from './services'

function App() {
  const [refetch,setRefetch] = useState(false)
  const [buttonList, setButtonList] = useState([])
  const fetchButtons = async () => {
    const data = await getButtons()
    setButtonList(data)
  }
  useEffect(() => {
    fetchButtons()
  }, [refetch])

  return (
    <main className='conteiner'>
      <h1>Frontend Challenge - Total Coin</h1>
      <div className='d-flex flex-column gap-2'>
        {
          buttonList.map((btn) =>(
            <button 
            key={btn.id}
            className='btn btn-primary'>
              count is {btn.count}
            </button>
          ))
        }
      </div>
      <AddButton setRefetch={setRefetch} />
    </main>
  )
}

export default App
