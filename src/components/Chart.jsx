import { LineChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import React from 'react';
import { flattenDeep } from 'lodash';
import styled from 'styled-components';

const lineColors = [
  '#e41a1c',
  '#377eb8',
  '#4daf4a',
  '#984ea3',
  '#ff7f00',
  '#ffff33',
  '#a65628',
  '#f781bf',
];

class Chart extends React.Component {
  renderLabels() {
    const { results } = this.props;
    return results.map((line, idx) => {
      const P = styled.p`color: ${lineColors[idx]};`;
      return <P key={idx}>{line.label}</P>;
    });
  }

  render() {
    const { results } = this.props;
    const data = results.map(line => line.data.toJS());
    const allY = flattenDeep(data).map(item => item.y);
    const maxX = Math.max(...allY);
    return (
      <div>
        <LineChart
          axes
          margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
          axisLabels={{ x: 'Days', y: 'Number' }}
          yDomainRange={[0, maxX]}
          width={600}
          height={400}
          data={results.map(line => line.data)}
          lineColors={lineColors}
        />
        {this.renderLabels()}
      </div>
    );
  }
}

Chart.propTypes = {
  results: PropTypes.array,
};

export default Chart;
