// import { Button } from '@mui/material'

// import Drawer from '@mui/material/Drawer'
import { List, ListBullets, ListPlus, ToggleRight } from 'phosphor-react'
import React from 'react'
import Drawer from '../Drawer/Drawer'

import Navigator from '../Navigator/Navigator'

export default function Navigation() {
  return (
    <div
      className="bg-[#201e2e] border-b-[1px] border-b-[#55507aaa]
      flex items-center fixed w-full
      "
    >
      <nav
        className="flex w-[80vw] m-auto justify-between h-[calc(11vh-2px)] items-center
        max-md:w-full max-md:px-5 max-md:h-[calc(9vh-2px)]
      "
      >
        <span className="text-[#9c99ab] font-bold text-lg">
          Fabricyo Ribeiro
        </span>
        <div
          className="flex gap-14
            max-md:hidden
          "
        >
          <Navigator href="/" name="Início" />
          <Navigator href="/about" name="Quem sou" />
          <Navigator href="/knowledge" name="Conhecimentos" />
          <Navigator href="/projects" name="Projetos" />
        </div>
        
        <div className='md:hidden'>
          <Drawer />
        </div>
      </nav>
    </div>
  )
}
