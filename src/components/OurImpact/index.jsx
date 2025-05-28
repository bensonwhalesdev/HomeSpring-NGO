import Button from "../Button"

const OurImpact = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 w-[90%] mx-auto mt-8 border-b-2 border-gray-300 pb-3">
        Our Impact
      </h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-[7em] justify-center w-[90%] mx-auto p-4 md:p-10">
        <div className="text-gray-600 text-base md:text-lg">
          <p>We are committed to making a positive impact in the community. Here are some of the ways we are making a difference:</p>
        </div>

        <div className="text-base md:text-lg">
          <h4 className="font-medium text-gray-700">With your support we are changing lives by bringing safe clean water to communities that need it. Here is our journey so far and our impact due to your support.</h4>
          <Button 
            text={'Donate Now'} classStyle="bg-green-400 mt-4 text-white font-bold px-8 py-3 rounded-[10px] hover:bg-green-500 transition-all duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center w-[90%] mx-auto p-4 md:p-10 text-center">
        <div className="border-r-2 border-gray-300 pr-4 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">67</h1>
          <p>Impacted Villages</p>
        </div>

        <div className="border-r-2 border-gray-300 pr-4 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">34,000+</h1>
          <p>Lives Improved</p>
        </div>

        <div className="border-r-2 border-gray-300 pr-4 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">90%</h1>
          <p>Clean water access rate</p>
        </div>

        <div className="border-r-2 border-gray-300 pr-4 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">120+</h1>
          <p>Volunteers</p>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">24</h1>
          <p>New Boreholes</p>
        </div>
      </div>
    </>
  )
}

export default OurImpact
