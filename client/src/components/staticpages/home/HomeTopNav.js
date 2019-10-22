import React, {Component} from 'react';
import { Menu, Image, Sticky, Ref} from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import LogoDark from '../assets/images/bima-black-white.png';
import {HomeTopNavSec, HomeTopNavLink, HomeTopNavList, HomeTopNavItem, HomeTopNavItemRight} from '../../styledComponents/HomeTopNavStyles'

class HomeTopNav extends Component {
		render() {
			return (
	<>
	
<HomeTopNavSec>
	<Menu  inverted borderless>
		<Menu.Item header>
		<Link to='/'><Image size='tiny' src={LogoDark}/></Link>
		</Menu.Item>
		<Menu.Menu position='right'>
		<Menu.Item
		name='801-463-1727'
		onClick={this.handleItemClick}
		href='/contact'
		/>
		</Menu.Menu>
	</Menu>
</HomeTopNavSec>

	{/* <HomeTopNavList>

		<HomeTopNavItem>
				<Link to='/'><Image size='small' src={LogoDark}/></Link>
		</HomeTopNavItem>

		<HomeTopNavItemRight>
				<HomeTopNavLink href='/'>801-463-1727</HomeTopNavLink>
		</HomeTopNavItemRight>
		
	</HomeTopNavList> */}

	</>

			)
		}
	}

export default HomeTopNav;