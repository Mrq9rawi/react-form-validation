import React from "react";

export default function App() {

	const [formData, setFormData] = React.useState({
		userName: "",
		password: "",
		confirmPassword: "",
	});

	console.log(formData);

	function handelChange(event) {
		setFormData((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});

	}

	return (
		<main>
			<header>
				<h1>Create Account</h1>
			</header>
			<form id="form">
				{/* UserName  */}
				<div className="form-control user-name">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="user123"
						onChange={handelChange}
						name="userName"
						value={formData.userName}
					/>
					<span className="fas fa-check-circle"></span>
					<span className="fas fa-exclamation-circle"></span>
					<small> Username must be between 8 & 24 characters </small>
				</div>
				{/* Password  */}
				<div className="form-control password">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="Password"
						onChange={handelChange}
						name="password"
						value={formData.password}
					/>
					<span className="fas fa-check-circle"></span>
					<span className="fas fa-exclamation-circle"></span>
					<small>Password must be at least 6 characters</small>
				</div>
				{/* Confirm Password */}
				<div className="form-control confirm-password">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="password"
						id="password2"
						placeholder="Password"
						onChange={handelChange}
						name="confirmPassword"
						value={formData.confirmPassword}
					/>
					<span className="fas fa-check-circle"></span>
					<span className="fas fa-exclamation-circle"></span>
					<small>Values don't match</small>
				</div>
				{/* Submit button  */}
				<button>Submit</button>
			</form>
		</main>
	);
}
