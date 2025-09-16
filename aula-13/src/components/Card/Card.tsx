export default function Card(props:{nomeProps:string,precoProps:number,idProps:number}) {
  return (
    <div className="border-2 w-50 mx-auto p-5">
        <h2>Nome do produto : {props.nomeProps} </h2>
        <p>R$:{props.precoProps}</p>
        <p>Identificação: {props.idProps}</p>
    </div>
  )
}
