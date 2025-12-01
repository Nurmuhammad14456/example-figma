import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#F2F0F1] px-5">
      <div className="max-w-[1450px] mx-auto px-4">
        
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-5">
          
          <div className="w-full lg:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-black leading-[1.1] mb-4">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>

            <p className="text-gray-700 text-[14px] md:text-[12] mb-8 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, 
              designed <br /> to bring out your individuality and cater to your sense of style.
            </p>

          <button
  className="
 
    max-[640px]:w-full   
    min-[580px]:w-[210px]
    h-14 
    rounded-3xl 
    bg-black 
    text-white 
    font-medium 
    hover:bg-gray-800 
    transition-colors 
    duration-300
  "
>
  Shop Now
</button>

        <div className="flex flex-wrap justify-start max-[640px]:justify-center gap-6 mt-12">
  <div className="text-center sm:text-left">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">200+</h3>
    <p className="text-gray-600 text-[14px] mt-1">International Brands</p>
  </div>

  <div className="text-center sm:text-left">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">2,000+</h3>
    <p className="text-gray-600 text-[14px] mt-1">High-Quality Products</p>
  </div>

  <div className="text-center sm:text-left">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">30,000+</h3>
    <p className="text-gray-600 text-[14px] mt-1">Happy Customers</p>
  </div>
</div>


          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/img/blog.png"
              alt="Hero Image"
              width={700}
              height={700}
              className="w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] h-auto"
            />
          </div>

        </section>
      </div>
        <div className=' bg-black py-6 md:py-8 '>
        <div className='container mx-auto px-4 md:px-10 '>
         <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
         <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">VERSACE</div>
         <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">ZARA</div>
         <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">GUCCI</div>
         <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">PRADA</div>
         <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        <span className="font-normal italic">Calvin</span> <span className="font-semibold">Klein</span>
       </div>
      </div>

        </div>
      </div>

    </div>
  );
}
