function Row({ name, rocketType, latitude, longitude, city }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{rocketType}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td>{city}</td>
        </tr>
    )
}

export default Row