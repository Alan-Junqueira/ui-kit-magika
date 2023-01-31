import React, { useState } from 'react';
import { HeroCard } from '../../../../components/HeroCard';
import {
  HeroCardsContainer,
  HeroCardsContent,
  HeroCardsSlider
} from './styled';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './styles.css';

import achievementsImage from '/assets/images/hero-card-achievements.png';
import cleanestSchoolsImage from '/assets/images/hero-card-cleanest-schools.png';
import certifiedTeachersImage from '/assets/images/hero-card-certified-teachers.png';

interface IHeroCards extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroCards = ({ ...props }: IHeroCards) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10
    },
    breakpoints: {
      '(max-width: 767px)': {
        slides: {
          perView: 1
        }
      },
      '(min-width: 768px) and (max-width: 1199px)': {
        slides: { perView: 2, spacing: 10 }
      }
    },
    mode: 'free-snap'
  });

  return (
    <HeroCardsContainer {...props}>
      <HeroCardsContent>
        <div className="navigation-wrapper">
          <HeroCardsSlider ref={ref} className="keen-slider">
            <HeroCard
              image={cleanestSchoolsImage}
              title="Become one of the cleanest schools"
              variant="orange"
              className="keen-slider__slide"
            />
            <HeroCard
              image={achievementsImage}
              title="Has scored many achievements"
              variant="blue"
              className="keen-slider__slide"
            />
            <HeroCard
              image={certifiedTeachersImage}
              title="Having professional and certified teachers"
              variant="red"
              className="keen-slider__slide"
            />
          </HeroCardsSlider>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys()
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            })}
          </div>
        )}
      </HeroCardsContent>
    </HeroCardsContainer>
  );
};
