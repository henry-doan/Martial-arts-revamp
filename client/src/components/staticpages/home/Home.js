import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import VideoCover from './VideoCover'
import MapHome from './MapHome';
import HomeTopNav from './HomeTopNav';
import HomeMidNav from './HomeMidNav';
import HomeImageGrid from './HeroImageGrid';
import HomeProgram from './HomeProgram';
import Home2Hero from './Home2Hero';
import HomeCalendar from './HomeCalendar';
import Footer from '../footer/Footer'
import {HomeContainer,} from '../../styledComponents/HomeStyles';
import styles from '../../styledComponents/GlobalStyles.css';

const Home = () => (
	<>
		<HomeContainer>
			<HomeTopNav/>
			<VideoCover />
			<HomeImageGrid />
			<HomeMidNav />
			<Home2Hero />
			<HomeProgram />
			<HomeCalendar />
			<MapHome />
			<Footer/>
		</HomeContainer>
	</>
)

export default Home;