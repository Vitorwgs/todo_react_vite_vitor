const Filtro = (filter, setFilter) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="opcao-filter">
        <div>
            <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
        </select>
        </div>
        <div>
            <p>Ordem Alfabética</p>
            <button>Asc</button>
            <button>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filtro
