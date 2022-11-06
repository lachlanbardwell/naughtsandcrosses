import React, { useState } from 'react';
import linkedin from '../../../shared/images/linkedin-white.svg';
import github from '../../../shared/images/GitHub-Mark-Light-64px.png';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrowSharp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './footer.scss';

const socials: string[] = [linkedin, github];

export const Footer: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>();
  const open = Boolean(visible);

  // eslint-disable-next-line
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    visible ? setVisible(false) : setVisible(true);
  };
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
                    : 'https://github.com/lachlanbardwell/'
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
        <span className="otherLinks">
          <p>Other Projects</p>
          <IconButton
            id="anchor"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={visible ? 'true' : undefined}
            color="inherit"
            onClick={handleClick}
          >
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setVisible(false)}
              style={{ padding: 20 }}
            >
              <MenuItem
                onClick={() => window.open('https://shoppinglist.lachieb.dev')}
              >
                Shopping List
              </MenuItem>
              <MenuItem
                onClick={() => window.open('https://xando.lachieb.dev')}
              >
                Naughts and Crosses
              </MenuItem>
              <MenuItem
                onClick={() =>
                  window.open('https://infinite-depths-41827.herokuapp.com/')
                }
              >
                Kitchen Daydreams
              </MenuItem>
            </Menu>
            <DoubleArrowIcon />
          </IconButton>
        </span>
      </div>
    </footer>
  );
};
