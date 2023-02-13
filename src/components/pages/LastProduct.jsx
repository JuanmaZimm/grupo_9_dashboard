import ProductDetail from "../products/ProductDetail"
import Footer from "../partials/Footer"
import TopBar from "../partials/TopBar"

export default function LastProduct({ url }) {
   return (
         <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <TopBar />
               <div className="container-fluid">

                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                     <h1 className="h3 mb-0 text-gray-800">AllStarTech   Dashboard</h1>
                  </div>

                  <div className="row">
                     <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                           <ProductDetail url={url} />
                        </div>
                        <Footer />
                     </div>
                  </div>

               </div>
            </div>

            <Footer />
         </div>
   )
}