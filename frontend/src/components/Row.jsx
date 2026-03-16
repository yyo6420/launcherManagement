function Row({ name, rocketType, latitude, longitude, city }) {
    return (
        <>
            <td>{name}</td>
            <td>{rocketType}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td>{city}</td>
        </>
    )
}

export default Row