import style from './style.module.scss'
import { UserData } from '../../../site/Constant';

const About = () => {
    return (
        <main className={style.main} id="about">
            <div className={style.aboutMe}>
                <p className={style.Abouttxt}>About me</p>
                <div className={style.lineDIv}></div>
            </div>
            <div className={`container ${style.aboutInformation}`}>
                <div className={style.backImg}>
                    <img src="apple.jpg" alt="about" />
                </div>
                <div>
                    <h2 className={style.blockTitle}>Hi There! I'm Atif Asif</h2>
                    <h4 className={style.blockSubTitle}>Web Developer</h4>
                    <div className={style.blockTxt}>
                        <p>As a Web Developer, I specialize in creating immersive digital experiences that seamlessly blend cutting-edge technology with a strong focus on digital branding.</p>
                    </div>
                    <ul className={style.ulstyles}>
                        {UserData.map((val, ind) =>
                            <li key={ind}>
                                <span style={{ marginRight: "30px" }}>{val.key}</span> :
                                <span style={{ marginLeft: "7px" }}>{val.value}</span>
                            </li>
                        )}
                    </ul>
                    <div>
                        <button className={style.btnCV}>Download CV</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About;