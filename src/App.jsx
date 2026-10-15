import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Format from './components/Format'
import Conditions from './components/Conditions'
import Categories from './components/Categories'
import WeAreBest from './components/WeAreBest'
import Partners from './components/Partners'
import Organizers from './components/Organizers'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-espresso">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Format />
        <Conditions />
        <Categories />
        <WeAreBest />
        <Partners />
        <Organizers />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
