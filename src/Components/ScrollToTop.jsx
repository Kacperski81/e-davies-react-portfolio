
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'


function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <FontAwesomeIcon id="scroll-to-top" onClick={scrollToTop} icon={faAnglesUp} />
}

export default ScrollToTop;