import { Banner } from '../../../../components/Banner';
import { Button } from '../../../../components/Button';
import { Polygon } from '../../../../components/Polygon';
import {
  HomeHeroContainer,
  HomeHeroContent,
  HomeHeroTestimonial
} from './styled';

import homeHeroGirl from '/assets/images/home-hero-girl.png';
import homeHeroTestimonial1 from '/assets/images/home-hero-testimonial1.png';
import homeHeroTestimonial2 from '/assets/images/home-hero-testimonial2.png';

interface IHomeHero extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHero = ({ ...props }: IHomeHero) => {
  return (
    <HomeHeroContainer {...props}>
      <HomeHeroContent>
        <main>
          <h1>Gen-z as modern world pillars</h1>
          <h3>
            Cybersecurity is the practice of protecting systems and programs
            from digital attacks. These cyberattacks.
          </h3>
          <Button variant="big" label="Get Started" />
        </main>
        <div>
          <div className="backCircle"></div>
          <Polygon variant="blue" left={0} top={40} />
          <Polygon variant="orange" left={20} top={15} />
          <Polygon variant="yellow" right={10} top={0} />
          <Polygon variant="red" right={0} bottom={0} />
          <div className="girlImage">
            <HomeHeroTestimonial className="men">
              <img src={homeHeroTestimonial1} alt="" />
              <div>
                <h4>Ronald Richards</h4>
                <p>One of the best chatting app I have ever used.</p>
              </div>
            </HomeHeroTestimonial>

            <HomeHeroTestimonial className="woman">
              <img src={homeHeroTestimonial2} alt="" />
              <div>
                <h4>Jenny Wilson</h4>
                <p>
                  I commented on Figma, I want to add some fancy icons. Do you
                  have any icon set?
                </p>
              </div>
            </HomeHeroTestimonial>
            <img src={homeHeroGirl} alt="On foot girl using notebook" />
          </div>
        </div>
      </HomeHeroContent>
      <Banner variant="primary" className="rotate-right" delay={10} />
      <Banner variant="primary" className="rotate-left" />
    </HomeHeroContainer>
  );
};
