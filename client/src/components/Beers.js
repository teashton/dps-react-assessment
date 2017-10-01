import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Header, List, Container, Loader, Segment } from 'semantic-ui-react';


class Beers extends React.Component {
  state = { entries: [], show: 'All', page: 1, totalPages: 0 }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        let { data } = res;
        this.setState({ entries: data.entries, totalPages: data.total_pages })
      });
  }

  loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_beers?page=${page}`)
      .then( ({ data }) => {
        this.setState( state => {
          return { entries: [...state.entries, ...data.entries], page: state.page + 1 }})
      });
  }


  render() {
    let { entries, show, page, totalPages } = this.state;
    return (
      <Container>
        <Header style={styles.text} as="h1">{`Showing ${show} entries`}</Header>
        <List divided >   
            { entries.map( s => 
                <List.Item key={s.name}>
                  <List.Content>
                    <List.Header style={styles.text}>{s.name}</List.Header>
                    <p style={styles.text}>{s.description}</p>
                  </List.Content>
                </List.Item>

              )
            }           
        </List>
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
  }
}
export default connect()(Beers);





























