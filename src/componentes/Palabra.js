import '../estilos/Palabra.css';

function Palabra({ palabra, definicion, autor }) {
  return (
    <div className={`palabra autor-${autor.toLowerCase()}`}>
      <h3>{palabra}</h3>
      <p>{definicion}</p>
    </div>
  );
}

export default Palabra;