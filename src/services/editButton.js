const editButton = async (id,count) => {
  count = count + 1
  const response = await fetch(`http://localhost:8000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({count}),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
}

export default editButton