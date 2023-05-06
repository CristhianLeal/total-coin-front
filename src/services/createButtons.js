const  createButtons= async () => {
  const response = await fetch('http://localhost:8000/', {
    method: 'POST',
    body: JSON.stringify({count:0}),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  return data
}

export default createButtons
