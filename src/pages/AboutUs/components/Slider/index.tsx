import React, { useState } from 'react';
import { HeroCard } from '../../../../components/HeroCard';
import { SliderContainer, SliderContent, SliderSlider } from './styled';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './styles.css';

type SlideIten = {
  image: string;
  title: string;
  description?: string;
  variant: 'blue' | 'orange' | 'red';
};

interface ISlider extends React.HTMLAttributes<HTMLDivElement> {
  slideIten: SlideIten[];
}

export const Slider = ({ slideIten, ...props }: ISlider) => {
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
    <SliderContainer {...props}>
      <SliderContent>
        <div className="navigation-wrapper">
          <SliderSlider ref={ref} className="keen-slider">
            {slideIten.map((iten, index) => (
              <HeroCard
                key={index}
                image={iten.image}
                title={iten.title}
                variant={iten.variant}
                description={iten.description ?? iten.description}
                className="keen-slider__slide"
              />
            ))}
          </SliderSlider>
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
      </SliderContent>
    </SliderContainer>
  );
};
