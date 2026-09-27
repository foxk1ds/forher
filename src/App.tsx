import { Background } from './components/Background'
import { Hero } from './components/Hero'
import { Compliments } from './components/Compliments'
import { Closing } from './components/Closing'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />

      <main>
        <Hero />
        <Compliments />
        <Closing />
      </main>

      <Footer />
    </div>
  )
}
