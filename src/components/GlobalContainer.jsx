import PropTypes from 'prop-types';
import React from 'react';
import { observer } from 'mobx-react';

@observer
class GlobalContainer extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.store.message}</div>
        <input
          type="text"
          value={this.newTodoTitle}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  handleInputChange = e => {
    this.props.store.message = e.target.value;
  };
}

GlobalContainer.propTypes = {
  store: PropTypes.object,
};

export default GlobalContainer;
