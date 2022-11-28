import NRGLogoWhite from '../assets/nrg-logo-white.png';

export const Home = (): JSX.Element =>
{
  return (
    <>

      {/* Hold the container for the page */}
      <div 
      className="page relative z-0"
      >
        
        {/* Hold the overlay container */}
        <div
        className="h-[30vh] md:h-[60vh] lg:h-[80vh] absolute w-full z-10 flex justify-center items-center" 
        id="overlaying-logo"
        >
          <img 
          alt="nrg-logo-white"
          className="h-[10vh] md:h-[20vh] lg:h-[25vh] w-[40vh] md:w-[50vh] lg:w-[100vh]" 
          src={NRGLogoWhite} 
          />
        </div>

        {/* Hold the container for the video */}
        <div 
        className="w-screen"
        id="video-container"
        >

          {/* Hold the video for the home route */}
          <video
          autoPlay
          className="w-full h-[30vh] object-cover relative z-0 md:h-[60vh] lg:h-[80vh]"
          loop
          muted
          playsInline
          >

            {/* Hold the sources of the video */}
            <source 
            className="w-full h-full"
            data-wf-ignore="true"
            src="https://global-uploads.webflow.com/608c5ef703153e59ec742548/62992e6f1326a7362af3a816_2022_NRG_WESITE_LOOP_v002-transcode.mp4" 
            >
            </source>
            <source
            className="w-full h-full"
            data-wf-ignore="true" 
            src="https://global-uploads.webflow.com/608c5ef703153e59ec742548/62992e6f1326a7362af3a816_2022_NRG_WESITE_LOOP_v002-transcode.webm"
            >
            </source>
          </video>
        </div>
        
        {/* Hold a container for the latest merch */}
        <div
        className="w-full text-center bg-contain bg-no-repeat pt-8 pb-52 lg:pb-36 bg-bottom lg:bg-[right_5rem_top_10rem]" 
        id="shop-now"
        >
          <div 
          className="block lg:w-fit lg:pt-24 lg:w-fit lg:text-left"
          >
            <p
            className="text-4xl px-8 font-black tracking-tighter lg:pr-0 lg:pl-32 lg:text-5xl"
            >
              SHOP THE NRG X UFC GYM COLLAB
            </p>
            <button
            className="btn block mx-auto lg:mx-none lg:ml-32 mt-6"
            >
              SHOP NOW
          </button>
          </div>
        </div>
        
        {/* Hold a container for the org stats */}
        <div 
        className="w-full grid grid-rows-2 bg-black py-24 px-6 gap-y-16 lg:grid-rows-1 lg:grid-cols-2 lg:place-content-center"
        id="home-stats"
        >
          <div
          className="w-full text-left lg:flex lg:flex-col lg:w-1/2 lg:mx-auto" 
          id="stat-container"
          >
            <p
            className="text-3xl -tracking-[.15rem] font-black text-gray-500 w-fit"
            >
              NRG AUDIENCE REACH
            </p>
            <p
            className="text-7xl text-white font-black -tracking-[.15rem] w-fit"
            >
              71M+
            </p>
            <p
            className=" text-2xl text-white font-black -tracking-[.1rem] w-fit"
            >
              MONTHLY
            </p>
          </div>
          <div
          className="w-full text-left lg:flex lg:flex-col lg:w-1/2 lg:mx-auto" 
          id="stat-container"
          >
            <p
            className="text-3xl -tracking-[.15rem] font-black text-gray-500 w-fit"
            >
              TALENT AUDIENCE
            </p>
            <p
            className="text-7xl text-white font-black -tracking-[.15rem] w-fit"
            >
              90M+
            </p>
            <p
            className=" text-2xl text-white font-black -tracking-[.1rem] w-fit"
            >
              FOLLOWERS
            </p>
          </div>
        </div>
        
        {/* Hold a container for the home text */}
        <div 
        className="w-full text-center bg-white px-6 py-4"
        id="text-wrapper"
        >
          <p
          className="text-black text-xl font-black -tracking-[.1rem]"
          >
            AUTHENTIC GAMING COMMUNITY
          </p>
        </div>

        {/* Hold the section with the recent news */}
        <section 
        className="w-full max-w-none lg:grid lg:grid-cols-2" 
        id="nrg-news"
        >

          {/* Hold the container for the news card */}
          <div 
          className="w-full !bg-cover !bg-no-repeat !bg-right h-[500px] px-6 pb-10 flex flex-col justify-end" 
          id="nrg-news-container-1"
          >
            <p
            className="text-white text-2xl font-black -tracking-[.1rem] mb-2"
            >
              NRG VARIETY
            </p>
            <p
            className="text-white text-3xl font-black -tracking-[.05rem] mb-8 scale-y-150"
            >
              SAPNAP JOINS NRG
            </p>
            <button
            className="btn btn-outline border-2 w-fit text-white border-white font-black hover:bg-white hover:text-black hover:border-white"
            >
              VIEW MORE
            </button>
          </div>
          <div 
          className="w-full !bg-cover !bg-no-repeat !bg-center h-[500px] px-6 pb-10 flex flex-col justify-end" 
          id="nrg-news-container-2"
          >
            <p
            className="text-white text-2xl font-black -tracking-[.1rem] mb-4"
            >
              NRG SHOP
            </p>
            <p
            className="text-white text-3xl font-black -tracking-[.05rem] mb-8 scale-y-150 leading-7"
            >
              NRG FUNDAMENTALS COLLECTION
            </p>
            <button
            className="btn btn-outline border-2 w-fit text-white border-white font-black hover:bg-white hover:text-black hover:border-white"
            >
              SHOP NOW
            </button>
          </div>
          <div 
          className="w-full !bg-cover !bg-no-repeat !bg-right h-[500px] px-6 pb-10 flex flex-col justify-end" 
          id="nrg-news-container-3"
          >
            <p
            className="text-white text-2xl font-black -tracking-[.1rem] mb-4"
            >
              NRG ROCKET LEAGUE
            </p>
            <p
            className="text-white text-3xl font-black -tracking-[.05rem] mb-8 scale-y-150 leading-7"
            >
              NRG ROCKET LEAGUE DECALS
            </p>
            <button
            className="btn btn-outline border-2 w-fit text-white border-white font-black hover:bg-white hover:text-black hover:border-white"
            >
              VIEW MORE
            </button>
          </div>
          <div 
          className="w-full !bg-cover !bg-no-repeat !bg-center h-[500px] px-6 pb-10 flex flex-col justify-end" 
          id="nrg-news-container-4"
          >
            <p
            className="text-white text-2xl font-black -tracking-[.1rem] mb-4"
            >
              NRG VALORANT
            </p>
            <p
            className="text-white text-3xl font-black -tracking-[.05rem] mb-8 scale-y-150 leading-7"
            >
              NRG SELECTED FOR VCT FRANCHISING
            </p>
            <button
            className="btn btn-outline border-2 w-fit text-white border-white font-black hover:bg-white hover:text-black hover:border-white"
            >
              VIEW MORE
            </button>
          </div>
        </section>
      </div>
    </>
  )
}


