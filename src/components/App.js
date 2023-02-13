import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import SideBar from './partials/SideBar'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import LastProduct from './pages/LastProduct'
import Categories from './pages/Categories'
import Tables from './pages/Tables'

function App() {

   const [ users, setUsers ] = useState()
   const [ products, setProducts ] = useState()

   const fetchData = async (url, cb) => {
      const response = await fetch(url)
      const info = await response.json()
      cb(info)
   }

   useEffect(() => {
      fetchData('http://localhost:8000/api/users', setUsers)
      fetchData('http://localhost:8000/api/products', setProducts)
   }, [])

   return (
      <div id="wrapper">

         <SideBar />

         { (users && products && (
            <Switch>
               <Route exact path="/">
                  <Homepage categories={Object.keys(products.countByCategory)} users={users} products={products} />
               </Route>
               <Route path="/detail">
                  <LastProduct url={products.products[products.products.length - 1].detail} />
               </Route>
               <Route path="/categories">
                  <Categories categories={Object.keys(products.countByCategory)} />
               </Route>
               <Route path="/tables">
                  <Tables categories={Object.keys(products.countByCategory)} users={users} products={products} />
               </Route>
               <Route component={NotFound} />
            </Switch>
         )) || (<p>Cargando ....</p>)}

      </div>
   );
}

export default App;
