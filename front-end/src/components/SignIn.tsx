// this is the sign in page
import Promo from "./Promo";

interface SignInProps {
    // declaring setPage as a function with type string and it wont return anything (void)
    setPage: (page: string) => void;
}

function SignIn({ setPage }: SignInProps) {
    return (
        <>
            <section>
                <h1>Sign In To Account</h1>
                <form>
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <a href="/" type="button">
                        Cancel
                    </a>

                    <button type="submit">
                        Sign In
                    </button>
                </form>

                <div>
                    <h5>Don't have an account yet? </h5>
                    <a onClick={() => setPage("Sign Up")}>
                        Sign Up
                    </a>
                </div>
            </section>

            <section>
                <Promo />
            </section>
        </>
    )
};

export default SignIn;