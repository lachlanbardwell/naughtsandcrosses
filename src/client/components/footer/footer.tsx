import React from 'react';
import '../footer/footer.scss';
import facebook from '../../../shared/images/facebook-white.svg';
import instagram from '../../../shared/images/instagram-white.svg';
import linkedin from '../../../shared/images/linkedin-white.svg';
import twitter from '../../../shared/images/twitter-white.svg';
import youtube from '../../../shared/images/youtube-white.svg';

const socials: string[] = [facebook, instagram, linkedin, twitter, youtube];
const otherLinks: string[] = [
  'Terms & Conditions',
  'Legal Disclaimer',
  'About Lachie B',
  'Testimonials',
  'Contact Us',
];

export const LachFooter: React.FC = () => {
  return (
    <footer>
      <nav className="social">
        <ul>
          {socials.map((next, ind) => (
            <li key={ind}>
              <a
                href={
                  next === linkedin
                    ? 'https://www.linkedin.com/in/lachlan-bardwell'
                    : '#'
                }
              >
                <img src={next} alt={`Find us on ${next}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footerText">
        <div className="copyFootLeft">
          <span className="legal">
            {otherLinks.map((next, ind) => (
              <p key={ind}>
                <a href="#">{next}</a>
              </p>
            ))}
          </span>
        </div>
        <div className="copyFootRight">
          <p>&copy; Lachlan Bardwell 2022</p>
        </div>
      </div>
    </footer>
  );
};
