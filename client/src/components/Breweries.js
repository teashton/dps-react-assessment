import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Header, List, Container, Loader, Segment } from 'semantic-ui-react';


class Breweries extends React.Component {
  state = { entries: [], show: 'All', page: 1, totalPages: 0 }

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
        <Button onClick={this.loadMore}>Show next 5 Breweries!</Button>
          <Header style={styles.text} as="h1">{`${show} Breweries!`}</Header>
           { entries.map( s => 
              <div>
              <h1></h1>
              <h1></h1>
              <button onClick={this.brewData}>Expand</button>
              <Segment style={styles.background}>
                <p style={styles.headText}>{s.name}</p>
                <p style={styles.text}>{s.description}</p>
              </Segment>
              </div>
            )
          }          
        <Button onClick={this.loadMore}>Show next 5 Breweries!</Button>
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
  }
}
export default connect()(Breweries);





























