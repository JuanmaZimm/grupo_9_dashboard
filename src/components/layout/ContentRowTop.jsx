import RowProductDetail from "./RowProductDetail"
import CategoryDetail from "../categories/CategoryDetail"
import ContentColumnTop from "./ContentColumnTop"
import ProductInfo from '../products/ProductInfo'

export default function ContentRowTop({ categories, products, users }) {
   return (
      <div className="container-fluid">

         <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">AllStarTech   Dashboard</h1>
         </div>

         <RowProductDetail categories={categories} products={products} users={users} />

         <div className="row">

            <ContentColumnTop title='Last product added to Data Base'>
               <ProductInfo url={products.products[products.products.length - 1].detail} />
            </ContentColumnTop>

            <ContentColumnTop title='Categories'>
               <div className="row">
                  {categories && categories.map((category, i) => {
                     return (<CategoryDetail key={i} name={category} />)
                  })}
               </div>
            </ContentColumnTop>

         </div>
      </div>
   )
}