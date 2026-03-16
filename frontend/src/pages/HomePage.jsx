import LaunchersData from "../components/LaunchersData"
import { launchersData } from "../utills/launchersFunctions.js"

function HomePage() {
    return (
        <>
            <h1>רשימת משגרים</h1>

            <div>
                <LaunchersData launchersData={launchersData} />
            </div>
        </>
    )
}

export default HomePage