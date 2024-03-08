import { useState } from 'react'

export function Botao() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Contador {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+ Somar contador</button>
        <button onClick={() => setCount((count) => count - 1)}>- Subtrair contador</button>
    </>
  )
}

export default Botao