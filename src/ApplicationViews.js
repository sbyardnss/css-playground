import { Outlet, Route, Routes } from "react-router-dom"
import { Rotation } from "./Rotation/Rotation"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                
                <Route path="rotation" element={<Rotation />} />
            </Route>
        </Routes>
    )
}