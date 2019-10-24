import React from 'react';
import { MapBack, MapCard } from '../../styledComponents/HomeMapStyles';
import { Grid, Image, Card, Icon, Modal, Button } from 'semantic-ui-react';
import ConnectedContactForm from '../../admin/contact/ContactForm';

const MapHome = () => (
<>
<MapBack>

    <MapCard>
    <Grid padded>
        <Grid.Column floated='left' mobile={14} tablet={6} computer={7}>
            <h2>Contact Us</h2>
            <h3>We want to hear from you</h3>
        </Grid.Column>
        <Grid.Column floated='right' mobile={2} tablet={2} computer={3}>
        <Icon name='facebook' size='large' />
        <br />
        <Icon name='map' size='large' />
        <br />
        </Grid.Column>
    </Grid>

    <Grid padded>
        <Grid.Column mobile={16}  tablet={8}computer={4}>
        <h3>Visit us</h3>
        <h4>
            2257 South State St<br />
            Salt Lake City, Utah<br />
            84115
        </h4>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <h3>Contact Us</h3>
        <h4>
            +1 802-463-1727<br />
            BernalesMMA@gmail.com<br />
        </h4>
        </Grid.Column>
        <Grid.Row>

        <Grid.Column>

    <Modal trigger={<Button color='red'>Contact us!</Button>} closeIcon>    
    <Modal.Content>
    <ConnectedContactForm />
    </Modal.Content>
    </Modal>
        </Grid.Column>
        </Grid.Row>

    </Grid>



    </MapCard>
   


</MapBack>

</>
)

export default MapHome

