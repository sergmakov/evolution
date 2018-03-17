import { Button, Col, FormGroup, Grid, Row } from 'react-bootstrap';
import Chart from './Chart';
import PropTypes from 'prop-types';
import React from 'react';
import Universe from '../abstractions/Universe';
import { observer } from 'mobx-react';
// import styled from 'styled-components';

@observer
class GlobalContainer extends React.Component {
  evolve = () => {
    const { store, configs } = this.props;
    const universe = new Universe(configs);
    universe.makeTicks(10);
    store.results = universe.getResults();
  }
  render() {
    const { results } = this.props.store;
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Chart
              results={results.toJS()}
            />
            <FormGroup>
              <Button onClick={this.evolve}>Evolve</Button>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

GlobalContainer.propTypes = {
  store: PropTypes.object,
  configs: PropTypes.object,
};

export default GlobalContainer;
