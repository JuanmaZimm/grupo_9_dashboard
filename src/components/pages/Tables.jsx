import RowProductDetail from '../layout/RowProductDetail'
import TopBar from '../partials/TopBar'
import Footer from '../partials/Footer'

export default function Tables({ categories, users, products }) {
   return (
      <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <TopBar />
               <div className="container-fluid">

                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                     <h1 className="h3 mb-0 text-gray-800">AllStarTech   Dashboard</h1>
                  </div>

                  <RowProductDetail categories={categories} users={users} products={products} />

               </div>
            </div>

            <Footer />
         </div>
   )
}