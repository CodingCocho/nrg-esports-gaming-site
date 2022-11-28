import BuffSponsor from '../assets/partner-1.png';
import RockstarSponsor from '../assets/partner-2.png';
import ArmyNationGuardSponsor from '../assets/partner-3.png';
import LevisSponsor from '../assets/partner-4.png';
import HotPocketsSponsor from '../assets/partner-5.png';
import TheragunSponsor from '../assets/partner-6.png';
import AmPmSponsor from '../assets/shock-partner-1.png'

export const Partners = (): JSX.Element =>
{
  return (
    <>
      <section 
      className="w-full py-12 bg-black md:pl-4 lg:pl-12 xl:pl-24" 
      id="sponsors"
      >
        <p
        className="block text-center text-white text-5xl -tracking-[.1rem] font-black scale-y-200 md:text-left mb-4"
        >
          NRG ESPORTS
        </p>
        <div 
        className="grid mt-16 grid-cols-1-1/2 place-items-center place-content-center gap-y-16 lg:grid-cols-6-1/2 lg:justify-items-start"
        id="sponsor-grid"
        >
          <a 
          href="https://link.buff.game/NRGHOME"
          id="partner-link"
          >
            <img  
            alt="sponsor"
            className="lg:w-[150px]"
            src={BuffSponsor} 
            />
          </a>
          <a  
          href="https://www.rockstarenergy.com/"
          id="partner-link"
          >
            <img  
            alt="sponsor"
            className="lg:w-[150px]"
            src={RockstarSponsor} 
            />
          </a>
          <a  
          href="https://www.nationalguard.com/esports" 
          id="partner-link"
          >
            <img  
            alt="sponsor"
            className="lg:w-[150px]"
            src={ArmyNationGuardSponsor} 
            />
          </a>
          <a   
          href="https://twitter.com/NRGgg/status/1383155874546475009?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1383155874546475009%7Ctwgr%5Ece12ecdbd3a22a72d4501b944d00893d6984fc85%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.nrg.gg%2F%2Fpartners%2Flevis"         
          id="partner-link"
          >
            <img  
            alt="sponsor"
            className="lg:w-[150px]"
            src={LevisSponsor} 
            />
          </a>
          <a  
          href="https://twitter.com/NRGgg/status/1373016499036827659?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1373016499036827659%7Ctwgr%5E32e1f63010541bd38ca0bed205d120ad5923f853%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.nrg.gg%2F%2Fpartners%2Fhot-pockets" 
          id="partner-link"
          >
            <img  
            alt="sponsor"
            className="lg:w-[150px]"
            src={HotPocketsSponsor} 
            />
          </a>
          <img  
          alt="sponsor"
          className="lg:w-[150px]"
          src={TheragunSponsor} 
          />
        </div>
        <div 
        className="mt-32"
        >
          <p
          className="block text-center text-white text-5xl -tracking-[.1rem] font-black md:text-left mb-4 h-fit"
          >
            SAN FRANCISCO SHOCK
          </p>
          <div 
          className="grid grid-cols-1-1/2 place-items-center place-content-center gap-y-16 mt-16 lg:grid-cols-2-1/2 lg:justify-items-start" 
          id="shock-sponsors"
          >
            <img 
            alt="shock-sponsor" 
            className="w-[150px]"
            src={AmPmSponsor} 
            />
            <img 
            alt="shock-sponsor" 
            className="w-[150px]"
            src={TheragunSponsor} 
            />
          </div>
        </div>
      </section>
      <section 
      className="w-full" 
      id="nrg-fam"
      >
        <p 
        className="block text-center text-4xl font-black px-12 mt-16"
        >
          BECOME A PART OF THE #NRGFAM
        </p>
        <button 
        className="btn btn-lg block mx-auto mt-8"
        >
          INQUIRE
        </button>
      </section>
      <hr 
      className="mt-16 border-1 border-gray-400"
      />
    </>
  )
}