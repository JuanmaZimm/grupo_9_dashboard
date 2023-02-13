import ContentColumnTop from "../layout/ContentColumnTop";
import CategoryDetail from "./CategoryDetail";

export default function Categories({ categories }) {
   return (
      <ContentColumnTop title='Categories'>
         <div className="row">
            {categories && categories.map((category, i) => {
               return (<CategoryDetail key={i} name={category} />)
            })}
         </div>
      </ContentColumnTop>
   );

}