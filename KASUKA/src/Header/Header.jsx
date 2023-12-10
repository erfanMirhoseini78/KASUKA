import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src="./public/images/logo.png" alt="Logo" className="header-logo__img" />
                    <p className="header-logo__title">KASUKA</p>
                </div>

                <div className="header-menu">
                    <ul className="header-list">
                        <li className="header-item">
                            <a href="#" className="header-link">
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
                                تیم لیست کشویی
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
        </header>
    )
}
