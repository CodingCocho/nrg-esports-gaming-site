import NRGLogoBlack from '../assets/nrg-logo.png'

export const Footer = (): JSX.Element =>
{

  const sendEmail = (e:React.SyntheticEvent) =>
  {
    e.preventDefault();
  }

  return (
    <>
      <div 
      className="hidden relative"
      id="sponsor-row"
      >

      </div>
      <div 
      className="w-full flex flex-col pt-20"
      id="footer-flex-container"
      >
        <img 
        alt="nrg-logo-black"
        className="block mx-auto h-[40px] w-[140px]" 
        src={NRGLogoBlack} 
        />
        <div
        className="flex flex-col mx-auto text-center mt-6" 
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
        className="w-full form-control" 
        id="foot-flex-container-2"
        onSubmit={sendEmail}
        >
          <p
          className="block text-center font-black text-4xl px-12 mt-10"
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
          className="btn block mx-auto mt-6"
          type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <p
      className="block text-center pb-20 mt-10"
      >
        &copy; 2022, NRG Esports, All Rights Reserved
      </p>
    </>
  )
}