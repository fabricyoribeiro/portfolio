import Link from 'next/link'
import { WhatsappLogo } from 'phosphor-react'

interface ButtonProps {
  href: string
  title: string
}

export default function ContactButton(props: ButtonProps) {
  return (
    <button
      className=" p-4 w-[60%] mt-10 rounded border-2 border-gray-300
     transition-all delay-75
     hover:bg-[#9792b54d] hover:w-[68%] hover:text-white
    "
    >
      <Link
        href={props.href}
        target="_blank"
        className="flex justify-center gap-3"
      >
        {props.title}
        <WhatsappLogo size={30} />
      </Link>
    </button>
  )
}
