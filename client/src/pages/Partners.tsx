import BuffSponsor from '../assets/partner-1.png';
import RockstarSponsor from '../assets/partner-2.png';
import ArmyNationGuardSponsor from '../assets/partner-3.png';
import LevisSponsor from '../assets/partner-4.png';
import HotPocketsSponsor from '../assets/partner-5.png';
import TheragunSponsor from '../assets/partner-6.png';

export const Partners = (): JSX.Element =>
{
  return (
    <>
      <section 
      className="w-full py-12 bg-black md:pl-4" 
      id="sponsors"
      >
        <p
        className="block text-center text-white text-5xl -tracking-[.1rem] font-black scale-y-200 md:text-left mb-4"
        >
          NRG ESPORTS
        </p>
        <div 
        className="grid mt-16 grid-cols-1-1/2 place-items-center place-content-center gap-y-16"
        id="sponsor-grid"
        >
          <img  
          alt="sponsor"
          className=""
          src={BuffSponsor} 
          />
          <img  
          alt="sponsor"
          src={RockstarSponsor} 
          />
          <img  
          alt="sponsor"
          src={ArmyNationGuardSponsor} 
          />
          <img  
          alt="sponsor"
          src={LevisSponsor} 
          />
          <img  
          alt="sponsor"
          src={HotPocketsSponsor} 
          />
          <img  
          alt="sponsor"
          src={TheragunSponsor} 
          />
        </div>
        <div 
        className="mt-32 place-items-center place-content-center"
        >
          <p
          className="block text-center text-white text-5xl -tracking-[.1rem] font-black md:text-left mb-4 h-fit"
          >
            SAN FRANCISCO SHOCK
          </p>
        </div>
      </section>
      <section 
      className="w-full" 
      id="nrg-fam"
      >

      </section>
    </>
  )
}