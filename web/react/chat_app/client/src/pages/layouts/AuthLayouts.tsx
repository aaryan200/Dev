import { Outlet } from "react-router-dom";
import FullScreenCard from "../../components/FullScreenCard";

export default function AuthLayouts() {
    return <FullScreenCard>
        <FullScreenCard.Body>
            <Outlet />
        </FullScreenCard.Body>
        <FullScreenCard.BelowCard>
            Hi
        </FullScreenCard.BelowCard>
    </FullScreenCard>
}
