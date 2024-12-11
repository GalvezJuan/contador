import { useState, useEffect } from 'react';

function MiComponente() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Cambio de valor:`, contador);
  }, [contador]);

  return (
    <div className="centrado">
      <p className="fs-4">Contador: {contador}</p>
      <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default MiComponente;
