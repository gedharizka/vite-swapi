import React from 'react'

const Header = (props) => {
  return (
    <nav className="w-full py-4 bg-gray-900 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center">
          <h3 className="hover:text-gray-200 hover:underline px-4 font-bold text-2xl text-white uppercase">
            {props.children}
          </h3>
        </div>
      </nav>
  )
}

export default Header