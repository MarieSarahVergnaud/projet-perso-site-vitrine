import imgfb from "../assets/img-footer/facebook.png"
import imginsta from "../assets/img-footer/instagram.png"

function Footer() {

    return(
        <footer className="footer">
         <div className="smallTitle"></div>
         <ul className="footer-ul">
            
            <li><a href="https://www.facebook.com/maralechat/" >
                <img src={imgfb} alt="lien facebook"></img></a>
                </li>
                <li><a href="https://www.instagram.com/mara_lechat/" >
                <img src={imginsta} alt="lien instagram"></img></a>
                </li>
                {/* <li><a href="https://www.pinterest.fr/maralechat/" >
                <img src="./assets/img-footer/pinterest.png" alt="lien pinterest"></img>🐱</a>
                </li>
                <li><a href="https://www.etsy.com/fr/shop/Maralechat" >
                <img src="./assets/img-footer/stsy.png" alt="lien etsy">🐤</img></a>
                </li> */}
         </ul>

        </footer>
         
    )
}
export default Footer