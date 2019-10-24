import React, {Component} from 'react';
import { Menu, Image, Dimmer, Button} from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import LogoDark from '../assets/images/bima-black-white.png';
import LogoLight  from '../assets/images/bima-white-black.png'
import {MobNavSec} from '../../styledComponents/PageNavbar';
import {HomeTopNavSec} from '../../styledComponents/HomeTopNavStyles'

class HomeTopNav extends Component {
	state = {}

	handleOpen = () => this.setState({ active: true })
	handleClose = () => this.setState({ active: false })

		render() {
			const { activeItem } = this.state
			const { active } = this.state
			return (
	<>
	
<HomeTopNavSec>
	<Menu  inverted borderless>
		<Menu.Item header>
		<Link to='/'><Image size='tiny' src={LogoDark}/></Link>
		</Menu.Item>
		<Menu.Menu position='right'>
		<Menu.Item
		name='TRAIN NOW'
		onClick={this.handleItemClick}
		href='/contact'
		/>
		</Menu.Menu>
	</Menu>
</HomeTopNavSec>

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
           </Menu>
           <Button icon='times' inverted onClick={this.handleClose}/>
        </Dimmer>
          
	</>

			)
		}
	}

export default HomeTopNav;