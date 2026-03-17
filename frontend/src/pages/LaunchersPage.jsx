import LaunchersData from "../components/LaunchersData.jsx"
import { launchersData } from "../utills/launchersFunctions.js"

function LaunchersPage() {
    return (
        <>
            <h1>רשימת משגרים</h1>

            <div>
                <LaunchersData launchersData={launchersData} />
            </div>
        </>
    )
}

export default LaunchersPage