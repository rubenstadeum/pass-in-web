interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="button">{props.texto}</button>
}

export function App() {
  return (
    <div>
      <MeuBotao texto="Clique aqui" />
    </div>
  )
}
