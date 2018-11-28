import React from 'react';
import Popover from 'wix-style-react/Popover';

class ExampleDynamicContent extends React.Component {
  state = {
    content: '0',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { content } = this.state;

      if (content.length >= 100) {
        this.setState({ content: '0' });
      } else {
        this.setState({ content: content + '0' });
      }
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 50,
        }}
      >
        <Popover shown showArrow placement="top">
          <Popover.Element>
            <div style={{ width: 200 }}>
              Notice how the Popover retains its position as more content is
              added.
            </div>
          </Popover.Element>
          <Popover.Content>
            <div style={{ padding: '12px 24px', maxWidth: 230 }}>
              {this.state.content}
            </div>
          </Popover.Content>
        </Popover>
      </div>
    );
  }
}

export default ExampleDynamicContent;
