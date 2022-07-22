
  
  /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function AboutContent() {
    return (
      <div className="relative bg-white">
       <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt=""
                />
                </div>
            </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-sky-600 font-semibold tracking-wide uppercase">Who We Are</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:text-7xl">
                Intro
              </h3>
              {/* <p className="mt-8 text-lg text-gray-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p> */}
              <div className="mt-5 text-lg flex-col space-y-5  prose prose-sky text-gray-800">
                <p className="">
                Our team consists of agency lifers that get supercharged at the idea of helping brands grow and develop into their full potential. After working with some of the largest brands in the world (Google, LinkedIn, FX, Procter and Gamble), Kickbord founder Mike Mathias started decided to pull together a new team and focus in their skillset on helping new up-and-coming companies make their way into the next generation of brand greatness.  
                </p>
                    <hr/>
                <p>
                  At Kickbord, we understand that ecommerce is <span className="font-bold text-2xl text-sky-500">the future of brand growth and development</span>. We also know that it can be difficult for new brands to make their way in this ever-changing landscape. That's why we're dedicated to helping next generation brands reach their full potential.
                </p>
                <p>
                    We work with brands to develop strategies that will help them grow and succeed in the ecommerce space. We also provide guidance and advice on how to navigate the ever-changing landscape of ecommerce.
                </p>
                <p>
                    If you're a brand looking to take your place in the next generation of brand greatness, we'd love to help you get there. Contact us today to learn more about what we can do for you.
                </p>        


              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  