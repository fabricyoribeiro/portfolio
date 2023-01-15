import Image from "next/image";
import Navigation from "../components/Navigation/Navigation";
import Images from '../images/images'

export default function Knowledge(){

  return (
    <div className="bg-[#201e2e] ">
      <Navigation  />
      <div className="w-[70%] m-auto flex justify-center flex-col gap-4 items-center h-[91vh] text-gray-300 text-xl">
        <label className="text-4xl w-full text-white font-bold">Experiência e Tecnologias</label>
        <div className="grid grid-cols-2 ">
          <div className=" my-auto w-[90%] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, eligendi aperiam officia eius praesentium repellendus facere, et similique enim magni obcaecati vero nisi ipsam debitis voluptates repudiandae, nemo numquam nulla.
          </div>
          <div className="flex flex-row justify-center flex-wrap w-[100%] m-auto gap-4">
            {
              Images.map( (image, index) => {
                return (
                  <article key={index} className="bg-[#0e0e25] w-fit p-4 
                    outline-[#6e33a5] hover:outline hover:outline-1 transition-all duration-700 
                  ">
                    <Image key={index} src={image} width={60} height={60} alt="" />
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}