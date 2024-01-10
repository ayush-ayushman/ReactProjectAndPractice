import style from "./myntra.module.css"
import logo from "./myntra logo.png"

function Myntra(){
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                        <img src={logo}/>
                    </div>
                    <div className={style.Menu}>
                        <ol>
                            <li><a href="">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">HOME & LIVING</a></li>
                            <li><a href="">BEAUTY</a></li>
                            <li><a href="">STUDIO <sup>NEW</sup></a></li>
                        </ol>
                    </div>
                    <div className={style.Search}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search for products brands and more"/>
                    </div>
                    <div className={style.Icons}>
                        <article>
                            <a href="https://www.myntra.com/login?referer=https://www.myntra.com/">
                        <i class="fa-regular fa-user"><p className={style.profile}>Profile</p></i>
                            </a>
                        <a href="https://www.myntra.com/wishlist">
                        <i class="fa-regular fa-heart"><p className={style.wishlist}>Wishlist</p></i>
                        </a>
                        <a href="https://www.myntra.com/checkout/cart">
                        <i class="fa-solid fa-bag-shopping"><p className={style.bag}>Bag</p></i>
                        </a>
                        </article>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Myntra;