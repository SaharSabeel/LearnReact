//  const products = [
//   {title: ' carrot', isfruit:false, id:1},
//   {title: 'banana',isFruit:true, id: 2},
//   {title: ' Mango', isFruit:true, id :3}
//  ]
//  export default function ListItems(){
//   const ListItem = products.map(product =>
//     <li key = {product.id}
//     style={{color:product.isFruit?'magenta':"springgreen"}}
//     >
//       {product.title}
//     </li>
//   )
//   return(
//     <ul>{ListItem}</ul>
//   )
  
//  }
 export default function Click(){
  function Clickbutton(){
    alert("you have clicked me")
  }
  return(
    <button onClick={Clickbutton}>click me</button>
  )
 }
 