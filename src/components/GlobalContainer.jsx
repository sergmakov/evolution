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
    universe.makeTicks(configs.daysNumber, results => {
      store.results = results;
    });
  }

  renderChart(chartData, idx) {
    return (
      <div key={idx}>
        <h2>{chartData.label}</h2>
        <Chart
          results={chartData.data.toJS()}
        />
      </div>
    );
  }

  render() {
    const { results } = this.props.store;
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <FormGroup>
              <Button onClick={this.evolve}>Evolve</Button>
            </FormGroup>
            {results.map(this.renderChart)}
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
