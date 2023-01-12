import Navigator from "../Navigator/Navigator";


export default function Navigation(){
  return (
    <div className="bg-[#201e2e] border-b-[1px] border-b-[#55507aaa]">
      <nav className="flex flex-row w-[70vw] m-auto justify-center gap-14 h-[calc(9vh-2px)] items-center ">
        <Navigator href='/' name="Início" />
        <Navigator href='/about' name="Quem sou" />
        <Navigator href='/contact' name="Contato" />
        <Navigator href='/projects' name="Projetos" />
      </nav>
    </div>
  )
}