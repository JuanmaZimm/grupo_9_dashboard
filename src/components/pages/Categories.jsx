import CategoriesList from '../categories/CategoriesList'
import TopBar from '../partials/TopBar'
import Footer from '../partials/Footer'

export default function Categories({ categories }) {
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
                        <CategoriesList categories={categories} />
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