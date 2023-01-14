import Link from "next/link";
import {GithubLogo, InstagramLogo} from 'phosphor-react'

export default function Footer(){
  return (
    <footer className="flex justify-center items-center gap-2 h-[4vh] bg-[#201e2e] border-t-[1px] border-t-[#55507aaa]">
        <Link href='https://github.com/fabricyoribeiro' className="text-xl text-gray-100"><GithubLogo /></Link>
        <Link href='https://github.com/fabricyoribeiro' className="text-xl text-gray-100"><InstagramLogo /></Link>
    </footer>
  )
}