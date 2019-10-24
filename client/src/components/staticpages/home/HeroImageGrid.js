import React from "react";
import home1 from "../assets/images/home-1.jpeg";
import home2 from "../assets/images/home-2.jpeg";
import home3 from "../assets/images/home-3.jpeg";
import home4 from "../assets/images/home-4.jpeg";
import {Grid, Image} from 'semantic-ui-react';
import { HeroLowerImage, HeroImageItem} from '../../styledComponents/HomeImageGridStyles';

const HomeImageGrid = () => (
    <>
    <HeroLowerImage>
    <Grid columns={4} stretched doubling>
			<Grid.Row>
				<Grid.Column >
				<HeroImageItem src={home1}/>
				</Grid.Column>
				<Grid.Column >
				<HeroImageItem src={home2}/>
				</Grid.Column>
				<Grid.Column >
				<HeroImageItem src={home3}/>
				</Grid.Column>
				<Grid.Column >
				<HeroImageItem src={home4}/>
				</Grid.Column>
			</Grid.Row>
    </Grid>
    </HeroLowerImage>
    </>
)

export default HomeImageGrid;

