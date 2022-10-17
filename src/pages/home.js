import Featured from "../components/featured";
import Header from "../components/header";
import Navbar from "../components/navbar";
import PropertyList from "../components/propertyList"
import FeaturedProperties from "../components/featuredProperties";
import Footer from "../components/footer";
import MailList from "../components/mailList";
import '../styles/home.css'

const Home = () => {
    return ( <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">Browse by property type</h1>
    <PropertyList/>
    <h1 className="homeTitle">Homes guests love</h1>
    <FeaturedProperties />
    <MailList />
    <Footer />
    </div>
    
    </> 
    );
}
 
export default Home;