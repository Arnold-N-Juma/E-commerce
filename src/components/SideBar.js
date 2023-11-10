import Category from "./Category";



export default function SideBar({handleChange}) {
  
  return (
    <>
        <section className="sidebar">

            <div className="logo-container">
                
            </div>
        <Category handleChange={handleChange}/>
        </section>
       
    </>
  )
}
