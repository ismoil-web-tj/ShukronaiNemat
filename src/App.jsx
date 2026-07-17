import './App.css'
import { LanguageProvider } from './components/context/LanguageContext'
import Footer from './components/Footer/Footer'
import RestaurantHeader from './components/header/header'
import Hero from './components/Hero/Hero'
import MenuSection from './components/menu/MenuSection'

function App() {

  return (
    <>
      <LanguageProvider defaultLang="TJ">
        <RestaurantHeader />
        <Hero
          onOpenMenu={() =>
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
        {/* <MenuSection /> */}
        <Footer/>
      </LanguageProvider>
      
    </>
  )
}

export default App