"use client";
import { useState, FormEvent, ChangeEvent } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="mb-10">
     <div className="bg-black text-white rounded-2xl p-10 md:py-8 shadow-md">
  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 md:gap-6">

    <h2
      className="
        text-[26px] sm:text-[28px] md:text-[32px] lg:text-[40px]
        font-bold
        text-center           
        md:text-left         
        w-full               
      "
    >
      STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
    </h2>

    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col gap-3 md:gap-4
        w-full               
        md:w-auto            
        items-center          
        md:items-start       
      "
    >
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleChange}
        required
        className="
          w-[350px]  /* aniq width */
          px-4 py-3
          rounded-full
          border border-gray-700
          bg-white text-gray-950
          focus:outline-none focus:ring-2 focus:ring-white
        "
      />

      <button
        type="submit"
        className="
          w-[350px]  /* aniq width */
          px-4 py-3
          rounded-full
          border border-gray-700
          bg-white text-gray-950
          focus:outline-none focus:ring-2 focus:ring-white
          min-w-[220px]
        "
      >
        Subscribe
      </button>
    </form>

  </div>
</div>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SHOP.CO</h3>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              We have clothes that match your style and which are proud to wear. From women to men.
            </p>
           <div className="flex flex-wrap items-center space-x-4">
  <img src="/img/1.svg" alt="Icon 1" className="w-10 h-10 object-contain" />
  <img src="/img/2.svg" alt="Icon 2" className="w-10 h-10 object-contain" />
  <img src="/img/3.svg" alt="Icon 3" className="w-10 h-10 object-contain" />
  <img src="/img/4.svg" alt="Icon 4" className="w-10 h-10 object-contain" />
</div>

          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {['About', 'Features', 'Works', 'Career'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">HELP</h4>
            <ul className="space-y-3">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">FAQ</h4>
              <ul className="space-y-3">
                {['Account', 'Manage Deliveries', 'Orders', 'Payments'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-gray-600 hover:text-black transition-colors duration-200 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">RESOURCES</h4>
              <ul className="space-y-3">
                {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/ /g, '-').replace(/---/g, '-')}`}
                      className="text-gray-600 hover:text-black transition-colors duration-200 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SHOP.CO. All Rights Reserved
            </p>

          <div className="flex items-center gap-3 flex-wrap">
  <img src="/img/Badge.svg" alt="Badge 1" className="w-20 h-20 object-contain" />
  <img src="/img/Badge (1).svg" alt="Badge 2" className="w-20 h-20 object-contain" />
  <img src="/img/Badge (2).svg" alt="Badge 3" className="w-20 h-20 object-contain" />
  <img src="/img/Badge (3).svg" alt="Badge 4" className="w-20 h-20 object-contain" />
  <img src="/img/Badge (4).svg" alt="Badge 5" className="w-20 h-20 object-contain" />
</div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
