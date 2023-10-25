import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='w-full' data-testid="navbar">
            <nav className='navbar'>
                <Link href="/" className='navbar__title'>Hotels&Co.</Link>
            </nav>
        </header>
    )
}

export default Navbar
