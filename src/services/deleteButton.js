const  deleteButtons= async () => {
  const id = localStorage.getItem('id')
  const response = await fetch(`http://localhost:8000/${id}`, {
    method: 'DELETE'
  })
  const data = await response.json()
}

export default deleteButtons
