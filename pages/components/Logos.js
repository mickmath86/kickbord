/* This example requires Tailwind CSS v2.0+ */
export default function Logos() {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"  id="about"className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Our team has worked with
          </p>
        
            <div className="drop-shadow-none mt-6 gap-0.5 grid grid-cols-2  md:grid-cols-4 md:drop-shadow-md md:gap-0 g:mt-8">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="/images/google-grey.png"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <img className="max-h-20" src="/images/linkedin-grey.png" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <img className="max-h-20" src="/images/pg-grey.png" alt="Laravel" />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src="/images/fx-grey.png" alt="Tuple" />
              </div>
              
          </div>
           
        </div>
      </div>
    )
  }
  