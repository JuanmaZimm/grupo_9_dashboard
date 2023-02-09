import Statistic from "../statisctic/Statistic"

export default function RowMovieDetail({ categories, users, products }) {
   return (
      <div className="row">

         <Statistic title='Products in Data Base' count={products.count} color='primary' logo='laptop' />
         <Statistic title='Categories in Data Base' count={categories.length} color='success' logo='award' />
         <Statistic title='Users in Data Base' count={users.count} color='warning' logo='users' />

      </div>
   )
}