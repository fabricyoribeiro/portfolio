import Image from "next/image";
import Navigation from "../components/Navigation/Navigation";
import Images from '../images/images'

export default function Knowledge(){

  return (
    <div className="bg-[#201e2e] ">
      <Navigation  />
      <div className="w-[80%] m-auto flex justify-center flex-col gap-4 items-center  text-gray-300 text-xl
      md:h-[100vh] max-md:w-[95%]
      
      
      ">
        <label className="text-4xl w-full text-white font-bold 
          max-md:text-center max-md:mt-28
        ">Experiência e Tecnologias</label>
        <div className="grid grid-cols-2 
          max-md:grid-cols-1 max-md:text-center max-md:gap-5
        ">
          <p className=" my-auto w-[90%] text-left
            max-md:mx-auto
          ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, eligendi aperiam officia eius praesentium repellendus facere, et similique enim magni obcaecati vero nisi ipsam debitis voluptates repudiandae, nemo numquam nulla.
          </p>
          <div className="flex flex-row justify-center flex-wrap w-[100%] m-auto gap-3
            max-md:mb-10 max-md:gap-5
          ">
            {
              Images.map( (image, index) => {
                return (
                  <article key={index} className="bg-[#0e0e25] w-fit p-4 outline-[#6e33a5] flex
                    hover:outline hover:outline-1 transition-all duration-700 
                  ">
                    <Image key={index} src={image} width={80} height={80} alt="" />
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