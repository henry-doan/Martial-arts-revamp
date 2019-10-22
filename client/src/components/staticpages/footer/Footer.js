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
          <Link to="/Programs">Programs</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/Events" >Events</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/About" >About Us</Link>
          </Menu.Item>

          <Menu.Item>
          <Link to="/Contact">Contact</Link>
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

        {/* <Grid  columns={8}>
          <Grid.Row centered >


            <Grid.Column>
            <Icon name='facebook' size='big' />
            </Grid.Column>

            <Grid.Column> 
            <Icon name='twitter' size='big' />        
            </Grid.Column>

            <Grid.Column>
            <Icon name='instagram' size='big' />
            </Grid.Column>

          </Grid.Row>
        </Grid> */}
        
        <FooterText>
        &copy; 1996-2019 • Bernales Institute of Martial Arts
        </FooterText>
        </FooterContent>
      </FooterMain>
    </>

)

export default Footer;