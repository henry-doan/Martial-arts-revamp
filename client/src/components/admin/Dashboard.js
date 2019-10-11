import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const Dashboard = () => (
    <>
<Menu>
    <Menu.Item>
        <Link to='/event'>Events</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/program'>Programs</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/instructor'>Instructors</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/about'>About</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/contact'>Contact</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/walkin'>Walkin</Link>
    </Menu.Item>
</Menu>
</>
)

export default Dashboard;