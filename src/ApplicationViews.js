import { Outlet, Route, Routes } from "react-router-dom"
import { Rotation } from "./Rotation/Rotation"
import { Homepage } from "./Homepage/Homepage"
import { SlideReveal } from "./SlideReveal/SlideReveal"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="" element={<Homepage />} />
                <Route path="rotation" element={<Rotation />} />
                <Route path="textEffects" element={<SlideReveal />} />

            </Route>
        </Routes>
    )
}