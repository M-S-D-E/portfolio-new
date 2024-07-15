import React from 'react'
import PagesLayout from '../layouts/pagesLayout'

const About = () => {
  return (
    <PagesLayout headerText="About">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>This is the about of the application.</p>
      </div>
    </PagesLayout>
  )
}

export default About