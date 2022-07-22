import React from "react";

export default function App() {
	const userNameRef = React.useRef();

	// Focus On Username Input In Window Load
	window.onload = () => {
		userNameRef.current.focus();
	};

	let userNameDivStatus = "";
	let passwordDivStatus = "";
	let confirmPasswordDivStatus = "";

	const [formData, setFormData] = React.useState({
		userName: "",
		password: "",
		confirmPassword: "",
	});

	// Username Validation
	if (8 <= formData.userName.trim().length && formData.userName.trim().length <= 24) {
		userNameDivStatus = "success";
	} else if (formData.userName === "") {
		userNameDivStatus = "";
	} else {
		userNameDivStatus = "error";
	}

	// Password Validation
	if (formData.password.trim().length >= 6) {
		passwordDivStatus = "success";
	} else if (formData.password === "") {
		passwordDivStatus = "";
	} else {
		passwordDivStatus = "error";
	}

	// Confirm Password Validation
	if (formData.confirmPassword === formData.password && formData.confirmPassword !== "") {
		confirmPasswordDivStatus = "success";
	} else if (formData.confirmPassword === "") {
		confirmPasswordDivStatus = "";
	} else {
		confirmPasswordDivStatus = "error";
	}

	function handelChange(event) {
		setFormData((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});
	}

	// Submission Validation
	function handelSubmission(event) {
		// I stopped the submission just to prevent the website from reloading.
		event.preventDefault();
		if (
			8 <= formData.userName.trim().length &&
			formData.userName.trim().length <= 24 &&
			formData.password.trim().length >= 6 &&
			formData.confirmPassword === formData.password &&
			formData.confirmPassword !== ""
		) {
			setFormData(() => {
				return {
					userName: "",
					password: "",
					confirmPassword: "",
				};
			});
			userNameRef.current.focus();
		} else {
			formData.confirmPassword === ""
				? (confirmPasswordDivStatus = "error")
				: (confirmPasswordDivStatus = "");
		}
	}

	return (
		<main>
			<header>
				<h1>Create Account</h1>
			</header>
			<form id="form">
				{/* UserName  */}
				<div
					className={`form-control user-name ${
						userNameDivStatus === "success"
							? "success"
							: userNameDivStatus === "error"
							? "error"
							: ""
					}`}
				>
					<label htmlFor="username">Username</label>
					<input
						ref={userNameRef}
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
				<div
					className={`form-control password ${
						passwordDivStatus === "success"
							? "success"
							: passwordDivStatus === "error"
							? "error"
							: ""
					}`}
				>
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
				<div
					className={`form-control confirm-password ${
						confirmPasswordDivStatus === "success"
							? "success"
							: confirmPasswordDivStatus === "error"
							? "error"
							: ""
					}`}
				>
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
				<button onClick={handelSubmission}>Submit</button>
			</form>
		</main>
	);
}
