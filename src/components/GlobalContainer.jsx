import { Button, Col, FormGroup, Grid, Row } from 'react-bootstrap';
import Chart from './Chart';
import PropTypes from 'prop-types';
import React from 'react';
import { observer } from 'mobx-react';
// import styled from 'styled-components';

@observer
class GlobalContainer extends React.Component {
  evolve = () => {
    this.props.store.results = [43, 34, 34, 23, 42, 43];
  }
  render() {
    const { results } = this.props.store;
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Chart
              results={results}
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
};

export default GlobalContainer;
