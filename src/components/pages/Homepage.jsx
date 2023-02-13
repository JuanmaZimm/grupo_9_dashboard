import ContentRowTop from '../layout/ContentRowTop'
import TopBar from '../partials/TopBar'
import Footer from '../partials/Footer'

export default function Homepage({ categories, users, products }) {
   return (
      <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
            <TopBar />
            <ContentRowTop categories={categories} products={products} users={users} />
         </div>
         <Footer />
      </div>
   )
}