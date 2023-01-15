import { List, X } from 'phosphor-react'
import { useState } from 'react'
import Navigator from '../Navigator/Navigator'

export default function Drawer() {
  const [show, setShow] = useState(false)

  return (
    <aside className="fixed right-0 top-0 z-20 ">
      {show ? (
        <div
          className={`w-[55vw] bg-[#534b80] h-[100vh] p-5 
          `}
        >
          <ul className='flex flex-col gap-6 '>
            <li>
              <button
                className='text-3xl text-white'
                onClick={() => {
                  setShow(false)
                }}
              >
                <X />
              </button>
            </li>
            {/* <hr /> */}
            <li><Navigator href='/' name='Inicio' /></li>
            <li><Navigator href='/about' name='Quem sou' /></li>
            <li><Navigator href='/knowledge' name='Conhecimentos' /></li>
            <li><Navigator href='/projects' name='Projetos' /></li>

          </ul>
        </div>
      ) : (
        <button
          className={`text-white text-3xl pr-5 pt-4`}
          onClick={() => {
            setShow(true)
          }}
        >
          <List />
        </button>
      )}
    </aside>
  )
}
