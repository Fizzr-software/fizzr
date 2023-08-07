import React from 'react'
import Footer from '@/components/simple/Footer/Footer'
import Header from '@/components/simple/Header/Header'

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='wrapper-main'>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout