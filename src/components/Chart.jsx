import { LineChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import React from 'react';


class Chart extends React.Component {
  render() {
    const { results } = this.props;
    const data1 = results.map((res, idx) => ({
      x: idx,
      y: res,
    }));
    const data2 = results.map((res, idx) => ({
      x: idx,
      y: res * 2,
    }));
    return (
      <LineChart
        axes
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        axisLabels={{ x: 'Days', y: 'Number' }}
        width={600}
        height={400}
        data={[data1, data2]}
      />
    );
  }
}

Chart.propTypes = {
  results: PropTypes.array,
};

export default Chart;
