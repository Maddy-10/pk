import React from 'react'
import Navbar from '../../Navbar'
import hero from '../../../assets/Palluyirkalam/Hero/Hero.png'

const HeroEnglish = () => {
    return (
        <>

            <div className='xl:h-screen relative w-full'>
                <Navbar /> {/**This is Navbar */}
                <img src={hero} alt="" className='absolute -z-10 top-0 w-full h-full xl:h-screen' />{/**This is Hero Image */}
                {/**Hero Text Content and Buttons PalluyirKalam Font */}
                <div className='max-w-[1440px] mx-auto mt-20 pb-10 flex my-auto flex-col 2xl:mt-40'>

                    <p className='sm:ml-5 2xl:ml-0 [text-shadow:_7px_5px_2px_rgb(0_0_0_/_30%)] text-4xl md:text-5xl text-center lg:text-left lg:text-7xl font-semibold text-white'>The World For</p>
                    <p className='sm:ml-5 2xl:ml-0 [text-shadow:_7px_5px_2px_rgb(0_0_0_/_30%)] text-4xl md:text-5xl text-center lg:text-left lg:text-7xl font-semibold text-white mt-5'>All Creatures   </p>
                    <p className='sm:ml-5 2xl:ml-0 [text-shadow:_7px_5px_2px_rgb(0_0_0_/_30%)] text-sm md:text-lg text-center lg:text-left lg:text-3xl text-white mt-4'>Nature Way Farming & </p>
                    <p className='sm:ml-5 2xl:ml-0 [text-shadow:_7px_5px_2px_rgb(0_0_0_/_30%)] text-sm md:text-lg text-center px-3 lg:px-0 lg:text-left lg:text-3xl text-white mt-2'>Business Organization</p>

                    <div className="flex mx-auto justify-center lg:justify-start w-3/4 lg:mx-0">
                        <div className='sm:ml-5 2xl:ml-0 my-5 bg-[#432d4aff] hover:bg-[#71487dff] rounded-full w-1/2 sm:w-1/3 flex justify-center lg:justify-start'>
                            <button className='text-sm sm:text-lg xl:text-xl my-auto w-full text-white py-2'>Learn More</button>
                        </div>

                        <div className='ml-3 sm:ml-5  my-5 bg-[#432d4aff] hover:bg-[#71487dff] rounded-full  w-1/2 sm:w-1/3 flex justify-center lg:justify-start'>
                            <button className='text-sm sm:text-lg xl:text-xl my-auto w-full text-white py-2'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </ >

    )
}

export default HeroEnglish