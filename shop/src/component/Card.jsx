console.log("Hello World")

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={props.images.image} width="50%"></img>
      <h4>{props.zzanggu.title}</h4>
      <p>{props.zzanggu.content} <br></br>
        귀여움수치 : {props.zzanggu.price}</p>
    </div>
  )
}

export default Card