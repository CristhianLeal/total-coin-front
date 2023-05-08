const  deleteButtons= async (id) => {
  const response = await fetch(`http://localhost:8000/${id}`, {
    method: 'DELETE'
  })
  const data = await response.json()
}

export default deleteButtons
