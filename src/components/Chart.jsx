import { LineChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import React from 'react';


class Chart extends React.Component {
  render() {
    const { results } = this.props;
    const data = results.map(res => res.toJS());
    console.log('data', data);
    return (
      <LineChart
        axes
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        axisLabels={{ x: 'Days', y: 'Number' }}
        width={600}
        height={400}
        data={data}
      />
    );
  }
}

Chart.propTypes = {
  results: PropTypes.array,
};

export default Chart;
