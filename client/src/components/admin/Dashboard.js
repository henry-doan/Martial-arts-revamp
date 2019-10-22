import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

const Dashboard = () => (
    <>
       <Navbar />
        <Menu>
            <Menu.Item>
                <Link to='/admin/event'>Events</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/admin/programindex'>Programs</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/admin/instructor'>Instructors</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/admin/about'>About</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/admin/contacts'>Contact</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/admin/walkin'>Walkin</Link>
            </Menu.Item>
        </Menu>
    </>
)

export default Dashboard;
