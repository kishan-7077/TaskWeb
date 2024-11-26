import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:5000/login", {
				email,
				password,
			});
			navigate("/home"); // Redirect the user to the home page
		} catch (err) {
			setError("Invalid email or password");
		}
	};

	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<h2 style={styles.title}>Welcome Back</h2>
				<p style={styles.subtitle}>Log in to access your account</p>
				{error && <p style={styles.errorText}>{error}</p>}
				<form onSubmit={handleLogin} style={styles.form}>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						required
						style={styles.input}
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						required
						style={styles.input}
					/>
					<button type="submit" style={styles.button}>
						Login
					</button>
				</form>
				<p style={styles.footer}>
					Don't have an account?{" "}
					<a href="/signup" style={styles.link}>
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundColor: "#f5f5f5",
	},
	card: {
		backgroundColor: "#ffffff",
		padding: "30px",
		borderRadius: "10px",
		boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
		width: "100%",
		maxWidth: "400px",
		textAlign: "center",
	},
	title: {
		marginBottom: "10px",
		fontSize: "24px",
		fontWeight: "bold",
		color: "#333",
	},
	subtitle: {
		marginBottom: "20px",
		fontSize: "14px",
		color: "#666",
	},
	errorText: {
		color: "#e53935",
		fontSize: "14px",
		marginBottom: "15px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
	},
	input: {
		marginBottom: "15px",
		padding: "10px",
		borderRadius: "5px",
		border: "1px solid #ddd",
		fontSize: "16px",
	},
	button: {
		padding: "10px",
		borderRadius: "5px",
		backgroundColor: "#1976d2",
		color: "#ffffff",
		fontSize: "16px",
		fontWeight: "bold",
		cursor: "pointer",
		border: "none",
	},
	buttonHover: {
		backgroundColor: "#1565c0",
	},
	footer: {
		marginTop: "20px",
		fontSize: "14px",
		color: "#333",
	},
	link: {
		color: "#1976d2",
		textDecoration: "none",
		fontWeight: "bold",
	},
};

export default Login;
