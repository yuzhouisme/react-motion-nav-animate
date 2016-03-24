"use strict";

import React from 'react';
import { Motion, spring } from 'react-motion';
import { Col, Row } from 'antd';
import range from 'lodash.range';

let styles = {
  navContainer: {
    flex: 1,
    height: 278,
    marginBottom: 4,
    backgroundColor: '#FFF'
  }
};

var My = React.createClass({
  getInitialState: function() {
    return {
      animatedPart1: false,
      animatedPart2: false,
      animatedPart3: false
    }
  },
  render: function() {
    return (
      <div>
        <Motion style={{
          nh: spring(this.state.animatedPart1 ? 96 : 128),
          nt: spring(this.state.animatedPart2 ? -32 : 0),
          ta: spring(this.state.animatedPart2 ? 0 : 1),
          dmt: spring(this.state.animatedPart2 ? -148 : 0),
          avs: spring(this.state.animatedPart1 ? 38 : 70),
          lt: spring(this.state.animatedPart3 ? -28 : 28),
          la: spring(this.state.animatedPart3 ? 1 : 0),
          tro: spring(this.state.animatedPart1 ? 180 : 0)
        }}>
        {
          ({ nh, nt, ta, dmt, avs, lt, la, tro }) =>
          <div style={styles.navContainer}>
            <div style={{
              position: 'absolute',
              top: nt,
              width: '100%',
              height: nh,
              backgroundColor: '#ED7869',
              textAlign: 'center' }}>
              <p style={{ fontSize: 16, fontWeight: 400, paddingTop: 20, color: '#FFF', opacity: ta,
                whiteSpace: 'nowrap' }}>
                我不能看遍这个世界 </p>
              <p style={{ fontSize: 14, fontWeight: 400, paddingTop: 10, color: '#FFF', opacity: ta }}> 但, 我们可以 </p>
              <div style={{ marginTop: dmt }}>
                <img src={'./static/img/dynamic/avatar_eg.png'}
                  style={{
                    width: avs,
                    height: avs,
                    marginTop: 18,
                    borderRadius: '100%',
                    border: `2px solid #FFF` }} />
                <p style={{ fontSize: 16, fontWeight: 400, paddingTop: 20, color: '#000',
                  whiteSpace: 'nowrap'  }}>
                  YUZHOUISME </p>
                <p style={{ fontSize: 14, paddingTop: 10, paddingLeft: 20, paddingRight: 20, color: '#535353',
                  whiteSpace: 'nowrap' }}>
                  “一个人在年轻的时候” </p>
                <Row type="flex" justify="center" align="middle">
                  <Col>
                    <img src="./static/img/locale.png"
                      style={{ width: 20, height: 20, opacity: ta }} />
                  </Col>
                  <Col>
                    <span style={{ opacity: ta }}> 中国.广州 </span>
                  </Col>
                </Row>
              </div>
              <img style={{ width: '100%', height: 0.5 }} src="./static/img/line.png" />

              <div style={{
                  overflow: 'auto',
                  padding: 10,
                  paddingBottom: 79 }}>

                  <p>other page element.</p>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: nt,
              width: '100%',
              height: nh,
              backgroundColor: this.state.animatedPart2 ? '#ED7869' : 'transparent',
              textAlign: 'center' }}>
              <p style={{ paddingTop: 20, color: '#FFF', fontSize: 16, opacity: ta,
                whiteSpace: 'nowrap' }}> 我不能看遍这个世界 </p>
              <p style={{ paddingTop: 10, color: '#FFF', fontSize: 14, opacity: ta }}> 但, 我们可以 </p>
              <div style={{ marginTop: lt }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: '#FFF', opacity: la }}>
                  YUZHOUISME </p>
                <p style={{ fontSize: 14, color: '#FFF', opacity: la }}>
                  “一个人在年轻的时候” </p>
              </div>
            </div>

            <img src="./static/img/up.png" onMouseDown={this.animatedNav}
              style={{
                position: 'absolute', top: 200, left: 20, width: 30, height: 30,
                WebkitTransform: `rotateZ(${tro}deg)`,
                transform: `rotateZ(${tro}deg)` }} />
          </div>
        }
        </Motion>

        <div style={{ position: 'fixed', right: 20, top: 28 }}>
          <img style={{ width: 25, height: 25 }} src="./static/img/camera-w.png" />
        </div>
        <div style={{ position: 'fixed', left: 20, top: 28 }}>
          <img style={{ width: 25, height: 25 }} src="./static/img/power-w.png"
            onMouseDown={this.props.loggingFunc} />
        </div>

      </div>
    );
  },
  animatedNav() {
    clearInterval(this.timerSmaller1);
    clearInterval(this.timerSmaller2);
    clearInterval(this.timerBigger1);
    clearInterval(this.timerBigger2);
    if (this.state.animatedPart1 === false) {
      this.setState({ animatedPart1: true });
      this.timerSmaller1 = setInterval(function () {
        this.setState({ animatedPart2: true });
      }.bind(this), 300);
      this.timerSmaller2 = setInterval(function () {
        this.setState({ animatedPart3: true });
      }.bind(this), 400);
    } else {
      this.setState({animatedPart3: false});
      this.timerBigger1 = setInterval(function () {
        this.setState({ animatedPart2: false });
      }.bind(this), 100);
      this.timerBigger2 = setInterval(function () {
        this.setState({ animatedPart1: false });
      }.bind(this), 200);
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timerSmaller1);
    clearInterval(this.timerSmaller2);
    clearInterval(this.timerBigger1);
    clearInterval(this.timerBigger2);
  }
});

module.exports = My;
