const getAllLauncers = async () => {
    try {
        const fetchData = await fetch("http://localhost:3006/api/launchers", {
            method: "GET"
        })
        if (!fetchData) throw new Error("fetch failde :(");

        const lauchers = await fetchData.json();

        return lauchers;

    } catch (error) {
        console.error(error.message)
    }
}

export const launchersData = await getAllLauncers();
