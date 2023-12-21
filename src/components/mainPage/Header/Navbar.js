import style from "./style.module.scss"
import { headerLink } from "../../../site/Constant";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('');


    const menuClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClick = (path) => {
        setActiveLink(path)
    }
    useEffect(() => {
        Events.scrollEvent.register("begin", handleClick);
        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, []);
    return (
        <main className={`sticky-top ${style.main}`}>
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.logoMain}>
                        <img src="premiums.jpg" className={style.logoImg} alt="blackCoder" />
                        <ScrollLink to="home" className={style.hrefstyle}><span style={{ color: "#FEC544" }}>D</span>avis</ScrollLink>
                    </div>
                    <div>
                        <ul className={`${menuOpen ? style.opens : ""} ${style.ulStyle}`}>
                            {headerLink.map((val, ind) =>
                                <li key={ind}>
                                    <ScrollLink
                                        className={`${style.links} ${activeLink === val.href ? style.activeLink : ""}`}
                                        activeClass={style.active}
                                        to={val.href}
                                        onSetActive={handleClick}
                                    >
                                        {val.name}</ScrollLink>
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

// border-radius: 17px;
// padding: 7px 7px;
// color: #fff;
// transition: transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
// transition-delay: 0.2;

// &:hover {
//   box-shadow: 0px 0px 10px rgba(0, 0.1, 0, 0.5);
//   transform: rotate(180deg)
// }



// remove dependencies

// "@ant-design/charts": "^1.4.2",
// @types/react-router-dom
// antd-img-crop
// react-apexcharts
// react-bootstrap
// react-chartjs-2
// react-input-mask
// react-spinners
// fortawesome/fontawesome-free
// fortawesome/free-regular-svg-icons
// @types/react-router-dom

// react-select-country-list

// unused components

// calenderViewer
// delete InfoPopup
// FooterButton
// Pagination ?
// ShowRibbon
// GrayRingLoader
// SkeletonHorizontalLoader
// ViewIcons..
// TodayActivityTimeLine
// src/components/mainPage/Branch/Mapautocomplete.tsx


// DesignationsForm
// SearchCanteen
// SprintModal

// fixScroll