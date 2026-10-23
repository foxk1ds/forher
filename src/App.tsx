import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Background } from './components/Background'
import { Hero } from './components/Hero'
import { Compliments } from './components/Compliments'
import { Closing } from './components/Closing'
import { Footer } from './components/Footer'
import { LoginGate } from './components/LoginGate'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('isAdilya') === 'true'
    } catch {
      return false
    }
  })

  const handleEnter = () => {
    try {
      sessionStorage.setItem('isAdilya', 'true')
    } catch {
      // ignore
    }
    setIsAuthenticated(true)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <LoginGate key="login-gate" onConfirm={handleEnter} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <main>
              <Hero />
              <Compliments />
              <Closing />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
