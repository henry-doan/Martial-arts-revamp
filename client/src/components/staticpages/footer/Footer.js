import React from 'react';
import { Grid, Image, Card, Icon, Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {FooterText, FooterMain, FooterContent, FooterSocial} from '../../styledComponents/FooterStyles'

const Footer = () => (
    <>
      <FooterMain>
        <FooterContent>
        <Menu secondary fluid widths={8}>

          <Menu.Item>
          <Link to="/programs">Programs</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/instructors" >Instructors</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/about" >About Us</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>

        <FooterText>
        <FooterSocial>
        <Icon name='facebook' size='big' />
        </FooterSocial>
        <FooterSocial>
        <Icon name='instagram' size='big' />
        </FooterSocial>
        <FooterSocial>
        <Icon name='twitter' size='big' />   
        </FooterSocial>
        </FooterText>
        
        <FooterText>
        &copy; 1996-2019 • Bernales Institute of Martial Arts
        </FooterText>
        </FooterContent>
      </FooterMain>
    </>

)

export default Footer;