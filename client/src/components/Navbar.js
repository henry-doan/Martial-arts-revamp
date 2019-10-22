import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
  <Menu.Menu position='left'>

    <Link to='/'>
    <Menu.Item
    id='BIMA'
    name='BIMA'
    active={location.pathname === '/'}
    />
    </Link>

    <Link to='/dashboard'>
    <Menu.Item
    id='dashboard'
    name='dashboard'
    active={location.pathname === '/dashboard'}
    />
    </Link>

  </Menu.Menu>

    <Menu.Menu position='right'>
    <Menu.Item
      name='logout'
      onClick={ () => handleLogout(this.props.history) }
      />
    </Menu.Menu>
        </>
      )
    } else {
      return (
        <>
        <Menu.Menu position='left'>

  <Link to='/'>
    <Menu.Item
    id='BIMA'
    name='BIMA'
    active={location.pathname === '/'}
    />
  </Link>

  <Link to='/dashboard'>
    <Menu.Item
      id='dashboard'
      name='dashboard'
      active={location.pathname === '/dashboard'}
    />
  </Link>

</Menu.Menu>
<Menu.Menu position='right'>
  <Link to='/login'>
    <Menu.Item
      id='login'
      name='login'
      active={location.pathname === '/login'}
    />
  </Link>
  <Link to='/register'>
    <Menu.Item
      id='register'
      name='register'
      active={location.pathname === '/register'}
    />
  </Link>
</Menu.Menu>
        </>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
