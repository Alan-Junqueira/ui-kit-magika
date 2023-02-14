import { SectionInterface } from '../../../@types/sectionInterface';
import { HeroCard } from '../../../components/HeroCard';
import {
  MentorsContainer,
  MentorsContent,
  MentorsDescription,
  MentorsImageContainer,
  MentorsTextsContainer,
  MentorsTitle
} from './styled';

import mentorImage from '/assets/images/mentor.png';
import googleLogo from '/assets/images/google-logo.svg';

interface IMentors extends SectionInterface {}

export const Mentors = ({ ...props }: IMentors) => {
  return (
    <MentorsContainer {...props}>
      <MentorsContent>
        <MentorsImageContainer className="image">
          <HeroCard
            title="jacinto Diego"
            variant="blue"
            description="Principal of the brida schoolSoftware Enginer at Google"
            image={mentorImage}
          />
          <div className="google-logo">
            <img src={googleLogo} alt="google" />
          </div>
        </MentorsImageContainer>
        <MentorsTextsContainer className="texts">
          <MentorsTitle>
            We have mentors from Google ready to share knowledge.
          </MentorsTitle>
          <MentorsDescription>
            Make it easier for all students to do learning through digital media
            with existing media making it easier for students to learn anywhere
            and anytime.
          </MentorsDescription>
        </MentorsTextsContainer>
      </MentorsContent>
    </MentorsContainer>
  );
};
