import { FC } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
