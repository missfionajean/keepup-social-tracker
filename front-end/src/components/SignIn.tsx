import React from "react";
import { AUTH_URL } from "../utilities/UrlExports";

interface SignInProps {
	// declaring setPage as a function with type string and it wont return anything (void)
	setPage: (page: string) => void;
}

function SignIn({ setPage }: SignInProps) {

    const [user, setUser] = React.useState({
        username: "",
        password: "",
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(AUTH_URL + "/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        // error handling for failed sign-in
        if (response.ok) {
            const data = await response.json();
            // Handle successful sign-in, e.g., redirect or show a success message
            console.log("Sign-in successful:", data);
        } else {
            // Handle sign-in error, e.g., show an error message
            console.error("Sign-in failed");
        }
    }

	return (
		<>
			<h1>Sign In To Account</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter username"
                        onChange={handleChange}
                        value={user.username}
					/>
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter password"
                        onChange={handleChange}
                        value={user.password}
					/>
				</div>

				<a href="/" type="button">
					Cancel
				</a>

				<button type="submit">Sign In</button>
			</form>

			<div>
				<h5>Don't have an account yet? </h5>
				<a onClick={() => setPage("Sign Up")}>Sign Up</a>
			</div>
		</>
	);
}

export default SignIn;
