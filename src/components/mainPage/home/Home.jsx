import style from "./style.module.scss"

const Home = () => {
    return (
        <main>
            <div className={style.homeImg}>
                <div>
                    <p className={style.helloIm}>Hello, i'm</p>
                    <h1 className={style.edward}>Edward</h1>
                    <h1 className={style.edward}>Davis</h1>
                    <p className={style.visual}>Visual Designer</p>
                    <button className={style.btnHire}>Hire me</button>
                </div>
                <div>
                    <img src="hero.jpg" alt="hero" />
                </div>
            </div>
        </main>
    )
}
export default Home;