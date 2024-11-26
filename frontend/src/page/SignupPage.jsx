import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file for styling

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [redirect, setRedirect] = useState(false); // State to trigger redirection

	const handleSignup = async (e) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:5000/signup", {
				name,
				email,
				password,
			});
			setRedirect(true); // Trigger the redirect after successful signup
		} catch (err) {
			setError("Error creating account");
		}
	};

	if (redirect) {
		return <Navigate to="/login" />; // Redirect to login page after signup
	}

	return (
		<div className="signup-container">
			<h2>Create Account</h2>
			{error && <p className="error">{error}</p>}
			<form onSubmit={handleSignup} className="signup-form">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full Name"
					required
					className="signup-input"
				/>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
					className="signup-input"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required
					className="signup-input"
				/>
				<button type="submit" className="signup-button">
					Signup
				</button>
			</form>
			<p className="redirect-link">
				Already have an account? <a href="/login">Login here</a>
			</p>
		</div>
	);
}

export default Signup;
