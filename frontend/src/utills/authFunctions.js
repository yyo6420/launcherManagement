export const login = async (credentials) => {
    try {
        const response = await fetch("http://localhost:3006/api/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (!data.token) throw new Error(data.message);

        localStorage.setItem("token", data.token);

        return { data, error: null }
    } catch (error) {
        if (!(error instanceof Error)) throw new Error("Login failed, try again");
        console.error(error?.message)
        return { data: null, error }
    }
}