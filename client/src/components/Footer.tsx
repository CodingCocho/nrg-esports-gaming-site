import NRGLogoWhite from '../assets/nrg-logo-white.png'

export const Footer = (): JSX.Element =>
{

  const sendEmail = (e:React.SyntheticEvent) =>
  {
    e.preventDefault();
  }

  return (
    <>
      <div
      className="w-full bg-black" 
      id="component"
      >
        <div 
        className="hidden relative lg:block lg:pt-20"
        id="sponsor-row"
        >
          <img 
          alt="sponsors"
          className="grayscale lg:w-[700px] xl:w-[900px] mx-auto"
          src="https://global-uploads.webflow.com/608c5ef703153e59ec742548/633dfb1867f5ee02cd9cbb8c_nrgsponsor_white_upscaled_test_2.png"  
          />
        </div>
        <div 
        className="w-full flex flex-col pt-20 lg:flex-row lg:items-center lg:w-[900px] lg:mx-auto lg:justify-between xl:w-[1100px] lg:pt-12"
        id="footer-flex-container"
        >
          <img 
          alt="nrg-logo-black"
          className="block mx-auto h-[40px] w-[140px] lg:mx-0" 
          src={NRGLogoWhite} 
          />
          <div
          className="flex flex-col mx-auto text-center mt-6 lg:grid lg:grid-cols-4 lg:mt-0 lg:w-1/2 lg:mx-0 lg:gap-x-1 xl:grid-cols-6" 
          id="links"
          >
            <a
            className="mt-4 text-gray-400"
            href='https://twitter.com/NRGgg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
            >
              TWITTER
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://www.instagram.com/nrggram/'
            >
              INSTAGRAM
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://www.twitch.tv/nrggg'
            >
              TWITCH
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://www.tiktok.com/@nrg'
            >
              TIK TOK
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://www.linkedin.com/company/nrg-esports/'
            >
              LINKEDIN
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://discord.com/invite/nrg'
            >
              DISCORD
            </a>
            <a
            className="mt-4 text-gray-400"
            href='https://www.linkedin.com/company/nrg-esports/'
            >
              CONTACT
            </a>
            <a
            className="mt-4 text-gray-400"
            download
            href='https://drive.google.com/uc?export=download&id=19BHh8KlposWTzl3Ek8ssI1svOyP5PniD'
            >
              PRESS KIT
            </a>
          </div>
          <form
          className="w-full form-control lg:w-1/3" 
          id="foot-flex-container-2"
          onSubmit={sendEmail}
          >
            <p
            className="block text-center font-black text-4xl px-12 mt-10 lg:px-0 text-white"
            >
              SIGN UP FOR THE NRG NEWSLETTER
            </p>
            <input 
            className="input input-bordered input-primary w-fit block max-w-xs mx-auto mt-6" 
            id="" 
            name="newsletter" 
            type="email"
            />
            <button
            className="btn block mx-auto mt-6 bg-white text-black hover:bg-black hover:border-white hover:text-white"
            type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <p
        className="block text-center pb-20 mt-20"
        >
          &copy; 2022, NRG Esports, All Rights Reserved
        </p>
      </div>
    </>
  )
}