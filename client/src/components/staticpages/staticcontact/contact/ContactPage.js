import React, {Component} from 'react';
import { Grid, Image, GridColumn } from 'semantic-ui-react'
// import Iframe from './Iframe';
class ContactPage extends Component {
  render() {
    const {ContactPage} = this.props
 
    return (
  <Grid columns={3}>
    <Grid.Row>

<Grid.Column>
        <h1>Our Address:</h1>
2257 South State Street
<br />
Salt Lake City, Utah  84115
</Grid.Column>

<Grid.Column>
      <h1>Phone:</h1>
(801) 463-1727
<br />
<br />
      Feel free to call us anytime.  Please leave a message if you reach our voicemail.  We value your call and will get back to you promptly.
<br />
<br />
</Grid.Column>

<Grid.Column>
      <h1>Email:</h1>
Email us for info @ bernalesinstitute.com
<br />
<br />
{/* <Iframe /> */}
<section>
  

</section>
</Grid.Column>

<Grid.Column>
      <h1>Hours:</h1>

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
<br />
</Grid.Column>

<Grid.Column>
<h1>ANNUAL STUDIO CLOSURES:</h1>
<br />

BIMA is closed on federal and Utah holidays, except when schools are open, and from December 24 through January 1.
<br />
<br />

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
<br />
</Grid.Column>

    </Grid.Row>
  </Grid>
)

    }
  }


export default ContactPage;