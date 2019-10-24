import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import {DashItem, DashText, DashPage, DashContent} from '../styledComponents/DashboardStyles';

const Dashboard = () => (
    <>
<DashPage>
       <Navbar />
<DashContent>
    <h1>Welcom Admin!</h1>
        {/* <Menu inverted style={{background:'', a:''}}>
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
        </Menu> */}

        <Grid columns={3} doubling>
            <Grid.Row>

                <Grid.Column>
                <DashItem style={{background:'red'}}>
                    <DashText href='/admin/event'>Events</DashText>
                </DashItem>
                </Grid.Column>

                <Grid.Column>
                <DashItem style={{background:'blue'}}>
                <DashText href='/admin/programindex'>Programs</DashText>
                </DashItem>
                </Grid.Column>

                <Grid.Column>
                <DashItem style={{background:'orange'}}>
                <DashText href='/admin/instructor'>Instructors</DashText>
                </DashItem>
                </Grid.Column>


            {/* </Grid.Row>

            <Grid.Row> */}

                <Grid.Column>
                <DashItem style={{background:'green'}}>
                <DashText href='/admin/about'>About</DashText>
                </DashItem>
                </Grid.Column>

                <Grid.Column>
                <DashItem style={{background:'purple'}}>
                    <DashText href='/admin/contacts'>Contact</DashText>
                </DashItem>
                </Grid.Column>

                <Grid.Column>
                <DashItem style={{background:'teal'}}>
                <DashText href='/admin/walkin'>Walkin</DashText>
                </DashItem>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </DashContent>
    </DashPage>
    </>
)

export default Dashboard;
