import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='home to beers' active={this.activeItem('/')} />
          </Link>
          <Link to='/api/all_breweries'>
            <Menu.Item name='Check out our Brewerys!' active={this.activeItem('/api/all_breweries')} />
          </Link>
        
          <Link to='/api/all_beers'>
            <Menu.Item name='List of all Beers' active={this.activeItem('/api/all_beers')} />
          </Link>
        
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
