import { useEffect, useState } from 'react'
import {AddButton,ButtonCard} from './components/'
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
      <div>
        {
          buttonList?.length === 0 || buttonList === undefined
          ? <h3 className='mt-5  text-center'> Cargando botones... </h3>
          : buttonList?.map((btn) => (<ButtonCard key={btn.id} {...btn} />))
        }
      </div>
      <AddButton setRefetch={setRefetch} />
    </main>
  )
}

export default App
