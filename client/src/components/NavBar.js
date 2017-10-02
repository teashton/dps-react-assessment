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
        <Menu style={styles.spacing} pointing color='orange' inverted >
          <Link to='/'>
            <Menu.Item  name='Home to Assignment Details' active={this.activeItem('/')} />
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


const styles = {
  header: {
    width: '100%',
    height: '100vh'
  },
  text: {
    color: '#2ecc40',
  },
  headText: {
    color: '#44aAd5'
  },
  background: {
    backgroundColor: '#212121'
  },
  padding: {
    marginBottom: '2rem'
  },
  padTop: {
    marginTop: '5rem',
    color: '#2ecc40',
    marginBottom: '2rem'
  },
  padTop2: {
    marginTop: '1rem',
    color: '#2ecc40',
    marginBottom: '4rem',
    fontFamily: 'Cursive',
    textAlign: 'centered',
    fontSize: '80px',
    color: '#f7d796',
    paddingLeft: '35.5%'

  },
  appDescription: {
    height: '200px',
    overflowY: 'scroll',
    color: '#f7d796'
  },
  centered: {
    Aligned: 'centered'
  },
  cardColor: {
    background: '#665a3e'
  },
  name: {
    color: 'orange'
  },
  spacing: {
    flexGrow: '3'
  }
  

}


export default withRouter(NavBar);



