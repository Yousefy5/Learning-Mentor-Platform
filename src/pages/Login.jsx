import '../styles/Login.css';
function Login() {
    return(
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-center">Welcome Back</h2>
                <p className="card-text text-center text-muted">Sign in to your account to continue.</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email or Phone Number</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com or +1234567890"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="********"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href="#" className="text-decoration-none">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Log In</button>
                    <p className="text-center mt-3">Don't have an account?  
                        <a 
                        href="#" 
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        className="text-decoration-none">
                        Sign Up</a></p>
                    <p className="text-center my-3">OR</p>
                    <div className="d-grid gap-2">
                        <a href='https://accounts.google.com/signin' target='_blank' className="btn btn-outline-secondary"><i className="bi bi-google"></i> Log in with Google</a>
                        <a href='https://www.facebook.com/login' target='_blank' className="btn btn-outline-secondary"><i className="bi bi-facebook"></i> Log in with Facebook</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    )
}

export default Login;