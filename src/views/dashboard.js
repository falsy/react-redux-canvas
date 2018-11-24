import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCanvas} from '../actions/canvas';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const canvas = document.getElementById('sample');
    dispatch(setCanvas(canvas));
  }

  render() {
    return (
      <div>
        <canvas id={'sample'} width={'500'} height={'500'}></canvas>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    canvas: state.canvas
  };
};

export default connect(mstp)(Dashboard)