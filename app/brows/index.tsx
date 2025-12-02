const Braws = () => {
  return (
    <div className="w-full bg-[#F0F0F0] mt-[50px] py-[60px]">
      <h1 className="text-center text-black text-4xl font-bold p-5">
     <b>BROWSE BY DRESS STYLE</b>
      </h1>
      
      <div className="mx-auto flex flex-wrap gap-4  justify-center">
        
      <div className="flex gap-4 flex-wrap justify-center">
           <img 
          src="/img/Frame 61.png" 
          alt="Style Image 1" 
        />
        
        <img 
          src="/img/Frame 62.png" 
          alt="Style Image 2" 
        />
        
      </div>
       <div className="flex gap-4 flex-wrap justify-center">
          <img 
          src="/img/Frame 64.png" 
          alt="Style Image 3" 
        />
        
        <img 
          src="/img/Frame 63.png" 
          alt="Style Image 4" 
        />
       </div>

      </div>
    </div>
  );
};

export default Braws;