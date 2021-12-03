import react from 'React'

const Route = (route) => {
  return (
    <div>
      <h2>{route.name}</h2>
      <h2>{route.length}</h2>
      <h2>{route.grade}</h2>

    </div>
  )
}

export default Route;