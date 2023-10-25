import React from 'react';
import { Listing } from '@/components'

const Home = () => {
  return (
    <main className="flex-grow" data-testid="mainComponent">
      <Listing />
    </main>
  )
}

export default Home;
