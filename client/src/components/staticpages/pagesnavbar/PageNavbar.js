import React, { Component } from 'react';
import { Menu, Image, Button, Dimmer, Header, Icon } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import LogoDark from '../assets/images/bima-black-white.png';
import LogoLight  from '../assets/images/bima-white-black.png'
import {MobNavSec, DesNavSec} from '../../styledComponents/PageNavbar';


class PageNavbar extends Component {
    state = {}

handleOpen = () => this.setState({ active: true })
handleClose = () => this.setState({ active: false })

// handleOpen = () => this.setState({ active: true })
// handleClose = () => this.setState({ active: false })

    handleUpdate = (e, { calculations }) => {
      let menuClass;
  
      menuClass = calculations.bottomPassed === true && calculations.direction === "down"
        ? "fixed"
        : ""
  
      menuClass = calculations.bottomVisible === true && calculations.direction === "up"
        ? ""
        : "fixed"
  
      this.setState({ menuClass});
      
    };
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      const { active } = this.state
  
      return (
          <>
          <DesNavSec>
        <Menu  inverted borderless>
          <Menu.Item header>
          <Link to='/'><Image size='tiny' src={LogoDark}/></Link>
          </Menu.Item>
          <Menu.Menu position='right'>

          <Menu.Item
            name='programs'
            active={activeItem === 'programs'}
            onClick={this.handleItemClick}
            href='/programs'
          />
          <Menu.Item
            name='instructors'
            active={activeItem === 'instructors'}
            onClick={this.handleItemClick}
            href='/instructors'
          />
          <Menu.Item
            name='About'
            active={activeItem === '/about'}
            onClick={this.handleItemClick}
            href='/about'
          />
          </Menu.Menu>
        </Menu>
          </DesNavSec>

<MobNavSec>
    <Menu  inverted borderless>
        <Menu.Item header>
        <Link to='/'><Image size='tiny' src={LogoDark}/></Link>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>
                <Button icon='bars' inverted onClick={this.handleOpen}/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>

</MobNavSec>


        <Dimmer active={active} onClickOutside={this.handleClose} page>
       
           <Menu vertical inverted borderless>
               <Menu.Item header>
          <Link to='/'><Image size='large' centered src={LogoLight}/></Link>
               </Menu.Item>
               <Menu.Item>
          <Link to='/programs'>Programs</Link>
               </Menu.Item>
               <Menu.Item>
          <Link to='/instructors'>Instructors</Link>
               </Menu.Item>
               <Menu.Item>
          <Link to='/about'>About</Link>
               </Menu.Item>
               <Menu.Item>
          <Link to='/contact'>Contact</Link>
               </Menu.Item>
               {/* <Menu.Item>
               <Button icon='times' inverted onClick={this.handleClose}/>
               </Menu.Item> */}
           </Menu>
           <Button icon='times' inverted onClick={this.handleClose}/>
        </Dimmer>
          
          
        </>
      )
    }
  }

export default PageNavbar
