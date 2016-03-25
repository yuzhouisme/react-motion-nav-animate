# react-motion-nav-animate
Base on react-motion by Chenglou, write a nav animate demo and try to explain how to think and dismantling animation elements.

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[react-motion](https://github.com/chenglou/react-motion)

[Ant Design](https://github.com/ant-design/ant-design)

## Screenshot

![Screenshot](https://github.com/yuzhouisme/react-motion-nav-animate/blob/master/example/animate.gif)

## Running demo

1.Clone this repo.

2.Modify something in package.json like name to <your-project-name>.

3.Run npm install.

```bash
$ npm install
```

4.Run development server.

```bash
$ npm run dev
```

5.Open your browser to http://localhost:8001/

## Why make it?

One day I saw that on [dribbble](http://dribbble.com/), and think it beautiful, so do it.

![Reference](https://github.com/yuzhouisme/react-motion-nav-animate/blob/master/example/u-app-ux-800-600-2.gif)

## Explanation (I think it's important to know how to make the animation)

First, look the animation again and again, carefully. And try to find those points can be partitioned animation.

![Explain](https://github.com/yuzhouisme/react-motion-nav-animate/blob/master/example/explain.png)

As above, we use A, B, C to identify block, and find that three steps in animation.

1. A's height in smaller, B's size in smaller.
2. A move up, A's title and subtitle move up and opacity from 1 to 0, C move up.
3. A showing title and subtitle again.

From CSS style z-index , when step1, B > A > C, after step1, A > B > C.

But something interesting here, hmmm, style z-index in react is not supported by now :P (As in react-native, CSS style transform-origin is not supported to change...OH NO)

So we need to try other ways.

We put the same thing(A'title and subtitle) on the top layer and set bg transparent, then control it's alpha value. 

Okay, done it!

```
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
```

Don't forget clear those timer when component unmount.

## Conclusion

Careful observation, discover, you can make it.

I hope that can help you, thank you ;)

## Write in react and antd I used

My Blog [yuzhouisme.com](http://yuzhouisme.com/).

Tome, help students to remember words [tome.yuzhouisme.com](http://tome.yuzhouisme.com).

