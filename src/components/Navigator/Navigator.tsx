import Link from "next/link";

interface NavProps{
  href: string
  name: string
}

export default function Navigator(props: NavProps){
  return (
    <Link href={props.href}>
      <div className="font-bold text-lg text-white">
        {props.name}
      </div>
    </Link>
  )
}