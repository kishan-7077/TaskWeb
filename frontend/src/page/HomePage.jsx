import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

function Home() {
	const [tasks, setTasks] = useState([]); // State for storing tasks
	const [taskInput, setTaskInput] = useState(""); // State for the input field
	const navigate = useNavigate();

	// Handle adding a new task
	const handleAddTask = () => {
		if (taskInput.trim()) {
			setTasks([...tasks, taskInput]); // Add the task to the list
			setTaskInput(""); // Clear the input field
		}
	};

	// Handle removing a task
	const handleRemoveTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index)); // Remove the selected task
	};

	// Handle logout
	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove the authentication token
		navigate("/login"); // Redirect to the login page
	};

	return (
		<div className="home-container">
			<h2>Welcome to the Home Page</h2>
			<p>This is a secured page. You are logged in!</p>

			<div className="task-manager">
				<h3>Task Manager</h3>
				<div className="task-input">
					<input
						type="text"
						placeholder="Enter a new task"
						value={taskInput}
						onChange={(e) => setTaskInput(e.target.value)}
					/>
					<button onClick={handleAddTask} className="add-task-button">
						Add Task
					</button>
				</div>
				<ul className="task-list">
					{tasks.map((task, index) => (
						<li key={index} className="task-item">
							<span>{task}</span>
							<button
								onClick={() => handleRemoveTask(index)}
								className="remove-task-button"
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			</div>

			<button onClick={handleLogout} className="logout-button">
				Logout
			</button>
		</div>
	);
}

export default Home;
