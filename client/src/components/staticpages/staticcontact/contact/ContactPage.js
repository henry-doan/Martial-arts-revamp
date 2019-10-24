import React, {Component} from 'react';
import { Grid, Card, Icon, Modal } from 'semantic-ui-react';
import PageNavbar from '../../pagesnavbar/PageNavbar';
import Footer from '../../footer/Footer';
import {ModalContact} from '../../../styledComponents/ContactStyles';
import {BimaCover, Hero2CoverH2} from '../../../styledComponents/Home2HeroStyles';
import ConnectedContactForm from '../../../admin/contact/ContactForm';
import { PageContainer, PageWrap, Horizontal} from '../../../styledComponents/HomeStyles';

class ContactPage extends Component {
  render() {
    const {ContactPage} = this.props
    return (
      <>
      <PageNavbar />
      <PageContainer>

      <Modal trigger={
        <ModalContact>
          <Icon name='mail' size='big'/>
        </ModalContact>
      } closeIcon>
<Modal.Content>
<h1>Write us!</h1>
<Card fluid style={{padding: '2em'}}> 
<ConnectedContactForm />
</Card>
</Modal.Content>
</Modal>


      <BimaCover>
          <Hero2CoverH2>Contact Us</Hero2CoverH2>
        </BimaCover>
<PageWrap>

  <Grid columns={3} doubling>
    <Grid.Row >

<Grid.Column>
        <h1>Our Address:</h1>
        <p>
2257 South State Street
<br />
Salt Lake City, Utah  84115
        </p>
</Grid.Column>

<Grid.Column>
      <h1>Phone:</h1>
(801) 463-1727
<br />
<br />
<p>
Feel free to call us anytime.  Please leave a message if you reach our voicemail. 
We value your call and will get back to you promptly.
</p>
<br />
<br />
</Grid.Column>

<Grid.Column >
<h1>Email:</h1>
Email us for info @ bernalesinstitute.com
<br />
<br />
</Grid.Column>
</Grid.Row>
</Grid>

<Horizontal />

<Grid columns={2} doubling>
<Grid.Row>
<Grid.Column>
      <h1>Hours:</h1>
<p>
Monday:
<br />
11 a.m. to 1 p.m.
<br />
4 p.m. to 9:30 p.m.
<br />
<br />

Tuesday:
<br />

6:30 a.m. to 8:30 a.m.
<br />
11 a.m. to 12 p.m.
<br />
4 p.m. to 10 p.m.
<br />
<br />

    Wednesday:
<br />

11 a.m. to 2 p.m. 
<br />
(open mat from 1 p.m. to 2 p.m.)
<br />
4 p.m. to 9:30 p.m.
<br />
<br />


Thursday:
<br />

6:30 a.m. to 8:30 a.m.
<br />
11 a.m. to 12 p.m.
<br />
4 p.m. to 10 p.m.
<br />
<br />

Friday: 
<br />

5:30 p.m. to 8:30 p.m.
<br />
<br />

Saturday: 
<br />

10 a.m. to 2:30 p.m.
<br />
<br />

Sunday: 
<br />

CLOSED
<br />
</p>

</Grid.Column>

<Grid.Column>
<h1>Annual Studio Closures:</h1>
<p>
BIMA is closed on federal and Utah holidays, 
except when schools are open, 
and from December 24 through January 1.
</p>
<br />
<p>
January:

January 1 (New Year's Day)

Dr. Martin Luther King, Jr. Day

<br />
<br />

February
<br />

President's Day

May

Memorial Day
<br />
<br />

July
<br />

July 4 (Independence Day)

July 24 (Pioneer Day - Utah)
<br />
<br />

September
<br />

Labor Day
<br />
<br />

November
<br />

Thanksgiving Day and Black Friday
<br />
<br />

December
<br />

December 24 through January 1 (reopening on January 2)
<br />
</p>
</Grid.Column>

  </Grid.Row>
  </Grid>
</PageWrap>
  </PageContainer>
  <Footer />
  </>
)

    }
  }


export default ContactPage;