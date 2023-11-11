import Category from "./Category";



export default function SideBar({handleChange}) {
  
  return (
    <>
        <section className="sidebar">

            <div className="logo-container">
                <h1>🛒</h1>
            </div>
        <Category handleChange={handleChange}/>
        </section>
       
    </>
  )
}
