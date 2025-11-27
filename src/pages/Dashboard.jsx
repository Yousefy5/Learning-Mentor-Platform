import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="bg-light">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Dashboard;
