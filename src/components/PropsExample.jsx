import React from 'react'

 let PropsExample = (props) =>{
     console.log(props);
     return(
         <>
         <section className="card col-md-4">
             <article className="card-body">
                 <h1 className="card-title">{props.user.name}</h1>
                 <p className="card-text">{props.user.age}</p>
                 <p className="card-text">{props.user.company}</p>
                 <p className="card-text">{props.user.salary}</p>
             </article>
         </section>
         </>
     )
 } 
 export default PropsExample;