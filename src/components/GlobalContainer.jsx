import { FormControl, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

@observer
class GlobalContainer extends React.Component {
  render() {
    const TextBlock = styled.div`
      font-size: 15px;
    `;
    return (
      <FormGroup>
        <FormControl
          type="text"
          onChange={this.handleInputChange}
        />
        <TextBlock>{this.props.store.message}</TextBlock>
      </FormGroup>
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
