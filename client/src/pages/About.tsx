export const About = (): JSX.Element =>
{
  return (
    <>

      {/* Hold the container for the route */}
      <div
      className="w-full text-left pl-4 bg-black py-16 min-h-[80vh]"
      id="about-container"
      >
        <p
        className="text-white text-6xl font-black -tracking-[.15rem] scale-y-150 pl-4"
        id="page-title"
        >
          ABOUT NRG
        </p>
        <p 
        className="text-white leading-5 mt-12 font-[18px] font-medium"
        id="about-paragraph"
        >
          NRG is a professional gaming and entertainment company headquartered in Los Angeles, California. Founded in 2016, NRG has embodied competitive esports excellence and the best of gaming culture over the last half-decade. Known for championship teams and innovative gaming lifestyle content, NRG is one of the most-watched organizations in the world on Twitch and YouTube, and the most watched org across platforms in North America for 2021. <br />
          <br />
          NRG boasts the most-viewed and storied competitive Fortnite roster in the game, a World Championship Rocket League team, an Apex Legends squad with numerous national and international titles under its belt, and a top ranked fan favorite Valorant squad. Additionally, NRG is home to the San Francisco Shock, the org’s Overwatch League team, who is the winningest and most popular Overwatch team of all time, having won 2019, 2020 back-to-back Grand Finals. <br />
          <br />
          NRG's content channels span YouTube, TikTok, Instagram, Twitter, Facebook and multiple Snap Discover shows. NRG's social gaming brand, Full Squad Gaming, has become an instant powerhouse amassing millions of followers on TikTok and YouTube in its first year since launch! Currently, NRG content channels reach over 60M uniques a month throwing off over 3 million views a day! <br />
          <br />
          NRG also has opened the NRG Hot Pockets Castle in Downtown Los Angeles. This innovative studio/play space is a Fantasy Factory for gamers featuring giant creative installations, studio space, scrim/stream areas and general craziness. Organization and content sponsors include The General, Hot Pockets, Levi's, Coinbase, Army National Guard, AMPM, BUFF, Therabody, and Rockstar Energy Pepsi. <br />
        </p>
      </div>
    </>
  )
}