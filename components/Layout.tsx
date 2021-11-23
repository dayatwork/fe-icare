import { FC } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const Layout: FC = ({ children }) => {
  return (
    // <div className="min-h-screen flex flex-col justify-between">
    <div>
      <Navbar />
      <main className="bg-gray-200">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
