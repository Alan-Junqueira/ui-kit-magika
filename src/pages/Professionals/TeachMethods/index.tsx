import { Play } from 'phosphor-react';
import { SectionInterface } from '../../../@types/sectionInterface';
import {
  Methods,
  TeachMethodsContainer,
  TeachMethodsContent,
  TeachMethodsTitle,
  TheachMethod
} from './styled';

import teachMethod1 from '/assets/images/teach-method-1.png';
import teachMethod2 from '/assets/images/teach-method-2.png';
import teachMethod3 from '/assets/images/teach-method-3.png';

interface ITeachMethods extends SectionInterface {}

export const TeachMethods = ({ ...props }: ITeachMethods) => {
  return (
    <TeachMethodsContainer {...props}>
      <TeachMethodsContent>
        <TeachMethodsTitle>See how we teach</TeachMethodsTitle>
        <Methods>
          <TheachMethod>
            <div className="image">
              <button className="play">
                <Play weight="fill" />
              </button>
              <img src={teachMethod1} alt="" />
            </div>
            <h3>Tips on choosing a university</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <h4>Dianne Russell</h4>
            <span>Informatic Engineer Teacher</span>
          </TheachMethod>

          <TheachMethod>
            <div className="image">
              <button className="play">
                <Play weight="fill" />
              </button>
              <img src={teachMethod2} alt="" />
            </div>
            <h3>Tips on choosing a university</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <h4>Dianne Russell</h4>
            <span>Informatic Engineer Teacher</span>
          </TheachMethod>

          <TheachMethod>
            <div className="image">
              <button className="play">
                <Play weight="fill" />
              </button>
              <img src={teachMethod3} alt="" />
            </div>
            <h3>Tips on choosing a university</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <h4>Dianne Russell</h4>
            <span>Informatic Engineer Teacher</span>
          </TheachMethod>
        </Methods>
      </TeachMethodsContent>
    </TeachMethodsContainer>
  );
};
