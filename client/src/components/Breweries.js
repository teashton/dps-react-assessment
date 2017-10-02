import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import brewLogo from '../images/brewLogo.png'
import { Divider,
         Image, 
         Grid, 
         Card, 
         Button, 
         Header, 
         List, 
         Container, 
         Loader, 
         Segment } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { entries: [], show: 'Home', page: 1, totalPages: 0 }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        let { data } = res;
        this.setState({ entries: data.entries, totalPages: data.total_pages })
        this.props.dispatch({type: data.entries})
      });
  }

 loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_breweries?page=${page}&per_page=5page`)
      .then( ({ data }) => {
        this.setState( state => {
          return { entries: [...state.entries, ...data.entries], page: state.page + 1 }})
      });
  }

  render() {
    let { entries, show, page, totalPages } = this.state;
    return (
      <Container>
        <Image style={styles.padTop} src={brewLogo} shape='circular' centered/> <span>Top Aligned</span>
          <span><Header style={styles.padTop2} centered>{`${show} Breweries!`}</Header></span>
            <Container fluid>
              <Grid style={styles.padding} columns={3} centered>
                { entries.map( s => 
                  <Card.Group>
                    <Card style={styles.cardColor}> 
                      <Card.Content>
                        <Card.Header style={styles.name}>{s.name} </Card.Header>
                          <Divider />
                        <Card.Description style={styles.appDescription}>{s.description}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                )} 
              </Grid>
            </Container>
          <Button inverted color='orange' onClick={this.loadMore} attached='bottom'>Show next 5 Beers!</Button>
        </Container>
      )}}


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
    paddingLeft: '25.5%'

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
  }

}
export default connect()(Breweries);





























