import "./index.css";

const SearchResults = ({results}) => {
  return (
   <div className="d-flex flex-column align-items-start p-2">
  <ul className="list-unstyled border w-100">
    {/* Cabeçalho */}
    <li className="d-flex fw-bold border-bottom p-2 mb-2">
      <div style={{ width: "2rem" }}></div> {/* espaço pro checkbox */}
      <div className="col-3">Nome</div>
      <div className="col-3">Telefone</div>
      <div className="col-2">Código</div>
      <div className="col-3">Convênio</div>
    </li>

    {/* Linhas */}
    <div className="overflow-auto" style={{ minHeight: "400px" }}>

    {results.map((result, index) => (
    
      <li key={index} className="d-flex align-items-center ps-2 mb-2">
        <input type="checkbox" className="form-check-input me-3" />
        <div className="col-3">
          <button className="btn btn-link text-decoration-none p-0 text-primary fw-semibold">
            {result.nome}
          </button>
        </div>
        <div className="col-3">{result.telefone}</div>
        <div className="col-2">{result.codigo}</div>
        <div className="col-3">{result.convenio}</div>
      </li>
    ))}
      
    </div>
  </ul>
</div>

  )
}

export default SearchResults;
