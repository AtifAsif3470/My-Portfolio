import style from "./style.module.scss"


const Services = () => {
    return (
        <main className="container">
            <div className={style.servicMe}>
                <p className={style.servictxt}>services</p>
                <div className={style.lineDIv}></div>
            </div>
            <div className={style.ServicesBox}>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}></div>
                    <h2 className={style.iconboxTitle}>Sketches</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}></div>
                    <h2 className={style.iconboxTitle}>Sketches</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}></div>
                    <h2 className={style.iconboxTitle}>Sketches</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
            </div>
        </main>
    )
}
export default Services;