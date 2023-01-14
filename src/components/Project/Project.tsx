import Link from "next/link"
import { LinkSimple } from "phosphor-react"

interface ProjectProps{
  href:string
  content:string
  title:string
}

export default function Profect(props: ProjectProps){
  return (
    <article className="w-[23rem] border-[#6e33a5] border-2 text-gray-300 text-xl p-7 
    hover:border-[#a37ac9] transition-all duration-500" >
      <h1
        className='text-3xl mb-4 font-bold'
      >{props.title}</h1>
      <p className='mb-4'>
        {props.content}
      </p>
      <a 
        className='text-2xl text-[#b361ff] flex gap-2 items-center'
      >
        <Link href={props.href}>Visualizar</Link>
        <LinkSimple/>
      </a>
    </article>
  )
}