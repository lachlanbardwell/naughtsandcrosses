import React from 'react';
import linkedin from '../../../shared/images/linkedin-white.svg';
import github from '../../../shared/images/GitHub-Mark-Light-64px.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './footer.scss';

const socials: string[] = [linkedin, github];

export const Footer: React.FC = () => {
  return (
    <footer>
      <nav className="social">
        <ul>
          {socials.map((next, index) => (
            <li key={index}>
              <a
                href={
                  next === linkedin
                    ? 'https://www.linkedin.com/in/lachlan-bardwell'
                    : 'https://github.com/KnowsJudo/'
                }
              >
                <img src={next} alt={`Find us on ${next}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-contact">
        <p>&copy; Lachlan Bardwell 2022</p>
        <span className="footer-a">
          <MailOutlineIcon />
          <a href="mailto:Lachbardwell@gmail.com?subject=Enquiry from website">
            &nbsp;Contact
          </a>
        </span>
      </div>
    </footer>
  );
};
