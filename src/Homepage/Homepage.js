import { useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
export const Homepage = () => {
    const navigate = useNavigate()
    return <>
        <main id="homepageContainer">
            <section id="rotationSection">
                <button className="pageButton setCustomFont" onClick={() => navigate("/rotation")}>Rotation</button>
                <button className="pageButton setCustomFont" onClick={() => navigate("/textEffects")}>Text Effects</button>

            </section>
        </main>
    </>
}