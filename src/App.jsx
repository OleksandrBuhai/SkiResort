
import { Route, Routes } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import Main from '@/pages/Main'
import ProductDescription from '@/reusableComponents/Description/Description'
import Header from '@/components/Header/Header'




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/description' element={<ProductDescription />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
