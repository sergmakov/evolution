import { Button, Col, FormGroup, Grid, ProgressBar, Row } from 'react-bootstrap';
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

    store.progress = 0;
    store.spentTime = 0;
    store.results = [];
    const progressPerDay = 100.0 / (configs.daysNumber * configs.worlds.length);
    const startTime = Date.now();

    let promise = Promise.resolve();
    configs.worlds.forEach((worldConfig, idx) => {
      promise = promise.then(() => {
        const universe = new Universe(worldConfig);
        return universe.makeTicks(configs.daysNumber, results => {
          store.results[idx] = {
            name: worldConfig.name,
            data: results,
          };
          store.progress += progressPerDay;
          store.spentTime = Date.now() - startTime;
        });
      });
    });
  }

  renderChart = (chartData, idx) => {
    return (
      <div key={idx}>
        <h3>{chartData.label}</h3>
        <Chart
          results={chartData.data.toJS()}
        />
      </div>
    );
  }

  renderWorld = (worldData, idx) => {
    return (
      <div key={idx}>
        <h2>{worldData.name}</h2>
        {worldData.data.map(this.renderChart)}
      </div>
    );
  }

  renderProgressBar = () => {
    const { progress, spentTime } = this.props.store;
    return (
      <div>
        <ProgressBar
          now={progress}
          bsStyle="success"
        />
        <div>{`Spent time: ${spentTime}`}</div>
      </div>
    );
  }

  render() {
    const { results } = this.props.store;
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={3} md={3}>
            <FormGroup>
              <Button onClick={this.evolve}>Evolve</Button>
            </FormGroup>
          </Col>
          <Col sm={9} md={9}>
            {this.renderProgressBar()}
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12}>
            {results.map(this.renderWorld)}
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
