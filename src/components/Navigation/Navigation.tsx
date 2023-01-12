import Navigator from '../Navigator/Navigator'

export default function Navigation() {
  return (
    <div 
      className="bg-[#201e2e] border-b-[1px] border-b-[#55507aaa]
      flex items-center
      "
    >
      <nav className="flex w-[70vw] m-auto justify-between h-[calc(9vh-2px)] items-center ">
        <span className="text-[#9c99ab] font-bold text-lg">Fabricyo Ribeiro</span>
        <div
          className='flex gap-14'
        >
          <Navigator href="/" name="Início" />
          <Navigator href="/about" name="Quem sou" />
          <Navigator href="/contact" name="Contato" />
          <Navigator href="/projects" name="Projetos" />
        </div>
      </nav>
    </div>
  )
}
