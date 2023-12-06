import style from "./style.module.scss"
import { headerLink } from "../../../site/Constant";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main className={style.main} >
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.logoMain}>
                        <img src="blackCoder.jpg" className={style.logoImg} alt="blackCoder" />
                        <a href="#" className={style.hrefstyle}><span style={{ color: "#FEC544" }}>D</span>avis</a>
                    </div>
                    <div>
                        <ul className={`${menuOpen ? style.opens : ""} ${style.ulStyle}`}>
                            {headerLink.map((val, ind) =>
                                <li key={ind}>
                                    <a href={val.href}>{val.name}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    {menuOpen ?
                        <CloseOutlined className={style.mobile} onClick={menuClick} />
                        :
                        <MenuOutlined className={style.mobile} onClick={menuClick} />
                    }
                </nav>
            </div>
        </main>
    )
}
export default Navbar;