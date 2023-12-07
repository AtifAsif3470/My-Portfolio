import style from './style.module.scss'
import { UserData } from '../../../site/Constant';

const About = () => {
    return (
        <main className={style.main}>
            <div className={style.aboutMe}>
                <p className={style.Abouttxt}>About me</p>
                <div className={style.lineDIv}></div>
            </div>
            <div className={`container ${style.aboutInformation}`}>
                <div className={style.backImg}>
                    <img src="about.jpg" alt="about" />
                </div>
                <div>
                    <h2 className={style.blockTitle}>Hi There! I'm Edward Davis</h2>
                    <h4 className={style.blockSubTitle}>Visual Designer</h4>
                    <div className={style.blockTxt}>
                        <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.</p>
                    </div>
                    <ul className={style.ulstyles}>
                        {UserData.map((val, ind) =>
                            <li key={ind}>
                                <span style={{ marginRight: "30px" }}>{val.key}</span>
                                :
                                <span style={{ marginLeft: "7px" }}>{val.value}</span>
                            </li>
                        )
                        }
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