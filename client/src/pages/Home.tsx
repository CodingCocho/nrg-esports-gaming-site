import NRGLogoWhite from '../assets/nrg-logo-white.png';

export const Home = (): JSX.Element =>
{
  return (
    <>
      <div 
      className="page relative z-0"
      >
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
        <div 
        className="w-screen"
        id="video-container"
        >
          <video
          autoPlay
          className="w-full h-[30vh] object-cover relative z-0 md:h-[60vh] lg:h-[80vh]"
          loop
          muted
          playsInline
          >
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
        <div
        className="w-full text-center bg-contain bg-no-repeat pt-8 pb-52 bg-bottom" 
        id="shop-now"
        >
          <div 
          className="block"
          >
            <p
            className="text-4xl px-8 font-black tracking-tighter"
            >
              SHOP THE NRG X UFC GYM COLLAB
            </p>
            <button
            className="btn block mx-auto mt-6"
            >
              SHOP NOW
          </button>
          </div>
        </div>
        <div 
        className="w-full grid grid-row-2 bg-black py-24 px-6 gap-y-16"
        id="home-stats"
        >
          <div
          className="w-full text-left" 
          id="stat-container"
          >
            <p
            className="text-3xl -tracking-[.15rem] font-black text-gray-500"
            >
              NRG AUDIENCE REACH
            </p>
            <p
            className="text-7xl text-white font-black -tracking-[.15rem]"
            >
              71M+
            </p>
            <p
            className=" text-2xl text-white font-black -tracking-[.1rem]"
            >
              MONTHLY
            </p>
          </div>
          <div
          className="w-full text-left" 
          id="stat-container"
          >
            <p
            className="text-3xl -tracking-[.15rem] font-black text-gray-500"
            >
              TALENT AUDIENCE
            </p>
            <p
            className="text-7xl text-white font-black -tracking-[.15rem]"
            >
              90M+
            </p>
            <p
            className=" text-2xl text-white font-black -tracking-[.1rem]"
            >
              FOLLOWERS
            </p>
          </div>
        </div>
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
        <section 
        className="w-full max-w-none" 
        id="nrg-news"
        >
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


