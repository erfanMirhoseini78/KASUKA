import "./Header.css"
import HeaderBox from "../Header-Box/HeaderBox"

export default function Header() {
    return (
        <>
            <div className="header-topbar__wrapper">
                <div className="header-topbar">
                    <div className="header-logo">
                        <img src="./public/images/logo.png" alt="Logo" className="header-logo__img" />
                        <p className="header-logo__title">KASUKA</p>
                    </div>

                    <div className="header-menu">
                        <ul className="header-list">
                            <li className="header-item">
                                <a href="#" className="header-link header-link__active">
                                    خانه
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    درباره ما
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    خدمات
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    نمونه کارها
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    تیم
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    لیست کشویی
                                </a>
                            </li>

                            <li className="header-item">
                                <a href="#" className="header-link">
                                    تماس با ما
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="header-start">
                        <div className="header-start__btn">
                            <a href="#" className="header-start__link">
                                شروع
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="header-content">
                    <h1 className="header-title">
                        راه حل های قدرتمند دیجیتال با
                    </h1>

                    <span className="header-title2">
                        KASUKA
                    </span>

                    <p className="header-text">
                        ما تیمی از بازاریابان با استعداد دیجیتال هستیم
                    </p>
                    
                    <div className="header-box__wrapper">
                        <HeaderBox></HeaderBox>
                        <HeaderBox></HeaderBox>
                        <HeaderBox></HeaderBox>
                        <HeaderBox></HeaderBox>
                        <HeaderBox></HeaderBox>
                        <HeaderBox></HeaderBox>
                    </div>
                </div>
            </header>
        </>


    )
}
