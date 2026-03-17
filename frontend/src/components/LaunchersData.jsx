import Row from "./Row"

function LaunchersData({ launchersData }) {

    return (
        <table className="launchersTable">
            <tbody>
                <tr>
                    <th>שם</th>
                    <th>סוג טיל</th>
                    <th>נקודת רוחב</th>
                    <th>נקודת אורך</th>
                    <th>עיר</th>
                </tr>
                {launchersData.map(launcher => {
                    return <Row name={launcher.name} rocketType={launcher.rocketType} latitude={launcher.latitude} longitude={launcher.longitude} city={launcher.city} />
                })}
            </tbody>
        </table>
    )
}

export default LaunchersData