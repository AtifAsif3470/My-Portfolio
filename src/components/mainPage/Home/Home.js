import style from "./style.module.scss"

const Home = () => {
    return (
        <main id="home">
            <div className={style.homeImg}>
                <div className={`container ${style.textDiv}`}>
                    <p className={style.helloIm}>Hello, i'm</p>
                    <h1 className={style.edward}>Edward Davis</h1>
                    <p className={style.visual}>Visual Designer</p>
                    <button className={style.btnHire}>Hire me</button>
                </div>
                <div className={style.divs}>
                    {/* <img src="avatar.png" alt="hero" className={style.hero} /> */}
                </div>
            </div>
        </main>
    )
}
export default Home;