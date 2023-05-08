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
      <h1 className='text-center my-5'>Frontend Challenge - Total Coin</h1>
      <div>
        {
          buttonList?.length === 0 || buttonList === undefined
          ? <h3 className='mt-5  text-center'> Cargando botones... </h3>
          : buttonList?.map((btn,index) => (<ButtonCard key={btn.id} setRefetch={setRefetch} number={index+1} {...btn} />))
        }
      </div>
      <AddButton setRefetch={setRefetch} />
    </main>
  )
}

export default App
