import Image from 'next/image'
import ContactButton from '../components/ContactButton/ContactButton'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import { CssImage, HtmlImage, JsImage } from '../images/images'

export default function Home() {
  return (
    <div className='bg-[#201e2e]'>
      <Navigation  />
      <div
        className={`bg-[url('../images/background2.jpg')] bg-cover md:h-[100vh]
          max-md:bg-none
        `}
      >
        <div
          className={`
          bg-gradient-to-br from-[rgba(14,12,27,0.83)] to-[rgba(13,12,20,0.81)] h-full w-full  text-xl text-gray-200
          flex justify-center max-md:to-[rgba(64,56,114,0.81)]
        `}
        >
          <div
            className={`
          w-[80vw]  m-auto  flex justify-between
          max-lg:w-full max-lg:px-5 max-sm:px-2 max-md:flex-col max-lg:my-24 max-md:gap-10 max-md:text-center 
          `}
          >
            <div className="flex flex-col justify-center ">
              <span className="text-2xl">Olá, me chamo</span>
              <h1
                className={`
                text-6xl my-4
                max-sm:text-5xl
              `}
              >
                Fabricyo Ribeiro
              </h1>
              <h2 className="text-3xl">Desenvolvedor Web Full Stack</h2>

              <ContactButton 
                href='https://wa.me/5587991770638' title='Entrar em contato' />
            </div>
            <div className="w-1/2 flex items-center
              max-md:w-full
            ">
              <ul className="w-[80%] m-auto 
                max-sm:w-[98%]
              ">
                <li className=" float-animation animation-delay-meio">
                  <div className="w-fit bg-[#201e2e] p-3 hover:scale-110 transition-all duration-700">
                    <Image
                      src={JsImage}
                      alt="ss"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                </li>
                <li className="flex justify-end float-animation animation-delay-um ">
                  <div className="w-fit bg-[#201e2e] p-3 hover:scale-110 transition-all duration-700">
                    <Image
                      src={CssImage}
                      alt="ss"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                </li>
                <li className="flex justify-around float-animation animation-delay-dois">
                  <div className="w-fit bg-[#201e2e] p-3 hover:scale-110 transition-all duration-700">
                    <Image
                      src={HtmlImage}
                      alt="ss"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  <div/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
