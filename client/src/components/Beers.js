import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, Header, List, Container, Loader, Segment } from 'semantic-ui-react';


class Beers extends React.Component {
  state = { entries: [], show: 'All', page: 1, totalPages: 0 }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        let { data } = res;
        this.setState({ entries: data.entries, totalPages: data.total_pages })
        this.props.dispatch({type: data.entries})
      });
  }

  loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_beers?page=${page}&per_page=5page`)
      .then( ({ data }) => {
        this.setState( state => {
          return { entries: [...state.entries, ...data.entries], page: state.page + 1 }})
      });
  }
 
 // brewData = (s) => {
 //    const brewery = 
 //    axios.get(`'/api/all_breweries'${s.name}`)
 //      .then ( ({ data }) => {
 //        this.brewData( state => {
 //          return { entries: [state.entries]}
 //        });
 //      })
 // ----------------------NOT WORKING AS OF YET--------------------------

 //  }

  render() {
    let { entries, show, page, totalPages } = this.state;
    return (
      <Container style={styles.segmentWidth}>
        <Button onClick={this.loadMore}>Show next 5 Beers!</Button>
          <Header style={styles.text} as="h1">{`${show} Beers!`}</Header>
           { entries.map( s => 
              <div>
              <h1></h1>
              <h1></h1>
              <Segment style={styles.background}>
              <button onClick={this.brewData}>Expand</button>
                <p style={styles.headText}>{s.name}</p>
                <p style={styles.text}>{s.description}</p>
              </Segment>
              </div>
            )
          }          
        <Button onClick={this.loadMore}>Show next 5 Beers!</Button>
      </Container>
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
  segmentWidth: {
    width: '500px'
  }

}
export default connect()(Beers);





























