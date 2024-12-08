import {CssBaseline } from "@mui/material"
import MainMenu from "./components/MainMenu"
import Body from "./components/Body"
import { SearchProvider } from "./context/SearchContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quiz from "./components/Quiz"
import QuizResult from "./components/QuizResult"
import { motion, AnimatePresence } from "framer-motion"
import SignUp from "./components/SignUp"
import About from "./components/About"
import LogIn from "./components/LogIn"

const pageTransition = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};


function App() {
  

  return (
    <BrowserRouter>

    <SearchProvider>

      <CssBaseline />

    <AnimatePresence>
      <Routes>
        <Route path="/" element= {
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
      <div>
      <MainMenu />
      </div>
      <Body />
      </motion.div>
        } />

        <Route path="/quiz" element={
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <Quiz />
          </motion.div>
        } />

        <Route path='/result' element={
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
      <QuizResult />
      </motion.div>
      } />

  <Route path='/signup' element={
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
      <SignUp />
      </motion.div>
    } />

  <Route path='/about' element={
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
      <About />
      </motion.div>
    } />
    
  <Route path='/login' element={
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
      <LogIn />
      </motion.div>
    } />
    
      </Routes>

      </AnimatePresence>

    </SearchProvider>
    </BrowserRouter>
  )
}

export default App
