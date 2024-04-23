import Category from "./Components/Category"
import Delivery from "./Components/Delivery"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Meal from "./Components/Meal"
import NewsLetter from "./Components/NewsLetter"
import TopNav from "./Components/TopNav"
import TopPicks from "./Components/TopPicks"

const App = () => {

  return (
    <div>
      <TopNav/>
      <Hero/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Category/>
      <NewsLetter/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
