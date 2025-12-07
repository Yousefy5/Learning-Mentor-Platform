import '../styles/Signup.css';
function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "true");
        window.location.reload();
    };
    return(
        <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="card p-4 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-center">Create Your Account</h2>
                <p className="card-text text-center text-muted">Unlock a world of knowledge and quizzes.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullname" placeholder="John Doe"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="your@example.com"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="********"/>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="terms"/>
                        <label className="form-check-label" htmlFor="terms">
                            I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                    <p className="text-center mt-3">Already have an account? 
                        <a 
                        href="#" 
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        className="text-decoration-none">
                        Log In</a></p>
                    <div className="d-grid gap-2 mb-3">
                        <p className="text-center my-1">OR</p>
                        <a href='https://accounts.google.com/signin' target='_blank' className="btn btn-outline-secondary"><i className="bi bi-google"></i> Sign up with Google</a>
                        <a href='https://www.facebook.com/login' target='_blank' className="btn btn-outline-secondary"><i className="bi bi-facebook"></i> Sign up with Facebook</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup;