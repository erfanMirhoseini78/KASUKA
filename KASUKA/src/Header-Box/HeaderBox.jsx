import "./HeaderBox.css"

export default function HeaderBox() {
    return (
        <div className="headerbox">
            <div className="headerbox-icon">
                {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
            </div>

            <h3 className="headerbox-text">
                <a href="#" className="headerbox-text__link">
                    نمودارها
                </a>
            </h3>
        </div>
    )
}
