import React from "react";
import pro1 from "../assets/images/pro-1.jpeg";
import pro2 from "../assets/images/pro-2.jpeg";
import {Grid, Image, Button} from 'semantic-ui-react';
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import { Link } from 'react-router-dom';
import { HeroProgramSection, HeroProgramImage,
     ProgramWrap, ProgramWrapH3, PButton} from '../../styledComponents/HomeProgramStyles';

const HomeImageGrid = () => (
    <>
        <ProgramConsumer>
        { value => (
          <div>
    <HeroProgramSection>
    <Grid columns={4} doubling stretched>
        <Grid.Row>
        <Grid.Column>
            <ProgramWrap>
                <HeroProgramImage src={ value.featuredPro[0] && value.featuredPro[0].image } />
                <ProgramWrapH3>{value.featuredPro[0] && value.featuredPro[0].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[0] && value.featuredPro[0].id}`,
                  state: { program: value.featuredPro[0] && value.featuredPro[0] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
        </Grid.Column>
            <Grid.Column>
            <ProgramWrap>
                <HeroProgramImage src={ value.featuredPro[1] && value.featuredPro[1].image } />
                <ProgramWrapH3>{value.featuredPro[1] && value.featuredPro[1].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[1] && value.featuredPro[1].id}`,
                  state: { program: value.featuredPro[1] && value.featuredPro[1] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Grid.Column>

            <Grid.Column>
            <ProgramWrap>
                <HeroProgramImage src={ value.featuredPro[2] && value.featuredPro[2].image } />
                <ProgramWrapH3>{value.featuredPro[2] && value.featuredPro[2].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[2] && value.featuredPro[2].id}`,
                  state: { program: value.featuredPro[2] && value.featuredPro[2] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Grid.Column>

            <Grid.Column>
            <ProgramWrap>
                <HeroProgramImage src={ value.featuredPro[3] &&  value.featuredPro[3].image } />
                <ProgramWrapH3>{value.featuredPro[3] &&  value.featuredPro[3].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[3] &&  value.featuredPro[3].id}`,
                  state: { program: value.featuredPro[3] &&  value.featuredPro[3] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Grid.Column>
        </Grid.Row>
    </Grid>

      </HeroProgramSection>
    </div>
      )}
      </ProgramConsumer>



    </>
)

export default HomeImageGrid;

