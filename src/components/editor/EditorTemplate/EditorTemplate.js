import React, { Component } from 'react';
import './EditorTemplate.scss';


class EditorTemplate extends Component {
  state = {
    leftPercentage: 0.5
  }

  // separator 클릭 후 마우스를 움직이면 그에 따라 leftPercentage 업데이트
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  }

  // 마우스를 뗐을 때 등록한 이벤트 제거
  handleMouseUp = (e) => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // separator 클릭 시
  handleSeparatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    // 각 영역에 flex 값 적용
    const leftStyle = {
      flex: leftPercentage
    };
    const rightStyle = {
      flex: 1 - leftPercentage
    };

    // separator 위치 설정
    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };

    return (
      <div className={('editor-template')}>
        { header }
        <div className={('panes')}>
          <div className={('pane', 'editor')} style={leftStyle}>
            {editor}
          </div>
          <div className={('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div 
            className={('separator')} 
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}/>
        </div>
      </div>
    );
  }
}

export default EditorTemplate;
