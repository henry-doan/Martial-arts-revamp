import React from "react";
import pro1 from "../assets/images/pro-1.jpeg";
import pro2 from "../assets/images/pro-2.jpeg";
import {Grid, Image, Button} from 'semantic-ui-react';
import { HeroProgramSection, HeroProgramImage,
     ProgramWrap, ProgramWrapH3, PButton} from '../../styledComponents/HomeProgramStyles';

const HomeImageGrid = () => (
    <>
    <HeroProgramSection>
    <Grid columns={4} doubling stretched>
        <Grid.Row>
        <Grid.Column>
            <ProgramWrap>
                <HeroProgramImage src={pro1}/>
                <ProgramWrapH3>HELLO FOO</ProgramWrapH3>
                <Button color='red' className='PButton'>CLICK</Button>
            </ProgramWrap>
        </Grid.Column>
            <Grid.Column>
                <ProgramWrap>
                <HeroProgramImage src={pro2}/>
                <ProgramWrapH3>HELLO FOO</ProgramWrapH3>
                <Button color='red' className='PButton'>CLICK</Button>
                  {/* <PButton>CLICK ME</PButton> */}
                </ProgramWrap>
            </Grid.Column>

            <Grid.Column>
                <ProgramWrap>
                <HeroProgramImage src={pro1}/>
                <ProgramWrapH3>HELLO FOO</ProgramWrapH3>
                <Button color='red' className='PButton'>CLICK</Button>
                </ProgramWrap>
            </Grid.Column>

            <Grid.Column>
                <ProgramWrap>
                <HeroProgramImage src={pro2}/>
                <ProgramWrapH3>HELLO FOO</ProgramWrapH3>
                <Button color='red' className='PButton'>CLICK</Button>
                </ProgramWrap>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </HeroProgramSection>
    </>
)

export default HomeImageGrid;

