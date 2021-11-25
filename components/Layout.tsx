import { FC } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type HeadingWrapperProps = {
  className?: string
}

const Layout: FC<HeadingWrapperProps> = ({ children, className }) => {
  return (
    // <div className="min-h-screen flex flex-col justify-between">
    <div className={className}>
      <div>
        <Navbar />
        <main className="bg-gray-200">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
