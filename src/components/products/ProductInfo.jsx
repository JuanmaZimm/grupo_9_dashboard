import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductInfo({ url }) {

   const [ product, setProduct ] = useState()

   useEffect( () => {
      fetch(url).then( response => response.json())
         .then( data => setProduct(data))
   }, [url])

   return (
      <>
         { ( product && (
            <>
               <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={`http://127.0.0.1:8000/images/products/${product.img1}`} alt={product.name} style={{height:"250px"}} />
               </div>
               <p>{product.description}</p>
               <Link className="btn btn-danger" to="/detail">View movie detail</Link>
            </>
         )) || <p>Loading ....</p>}
      </>
   )
}