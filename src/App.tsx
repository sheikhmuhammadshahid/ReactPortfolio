import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
