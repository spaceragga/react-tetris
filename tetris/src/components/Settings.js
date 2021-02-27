import React, { Component }  from 'react';
import { StyledSettingButton, StyledSettingHeader } from './styles/StyledSettings';

import Slider from './Slider';

import Modal from './Modal.js';

// const SettingButton = ({ callback }) => (
//   <StyledSettingButton onClick={callback}>Settings</StyledSettingButton>
// )

// export default SettingButton;

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = (e) => {
    e.preventDefault();

    this.setState({ show: false });
  };

  
  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <StyledSettingHeader>Settings</StyledSettingHeader>
          <Slider handleVolume={this.props.changeVolume} volume={this.props.volume} />
        </Modal>
        <StyledSettingButton type="button" onClick={this.showModal}>
        Settings
        </StyledSettingButton>
      </div>
    );
  }
}


export default Settings;