import './pageNotFound.css'
import icecream from '../img/ice-cream.png'

function PageNotFound () {
  return (
    <div className="container-404" role="404-page">
     <img src={icecream} alt="ice-cream" className="pic"></img>
     <div>
       <h2 className="text">
       This Page Melted in the Sun
       </h2>
       <p className="text">
       Oh no! This page does not exist.. 
       </p>
     </div>
    </div>
  )
}

export default PageNotFound;