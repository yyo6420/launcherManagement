import { useNavigate } from "react-router";
import { useState } from "react"
import { login } from "../utills/authFunctions.js";

function LoginPage() {
    const [credentials, setCredentials] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setCredentials(prev => ({ ...prev, [id]: value }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, error } = await login(credentials);
        if (error) return setError(error);        
    }

    return (
        <div>LoginPage</div>
    )
}

export default LoginPage