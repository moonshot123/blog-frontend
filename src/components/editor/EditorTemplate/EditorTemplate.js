import React from 'react';
import './EditorTemplate.scss';

class EditorTemplate extends React.Component{
    state = {
        leftPercentage:0.5
    }

    //separator 클릭후 마우스를 움직이면 그에 따라 leftperentage 업데이트
    handleMouseMove = (e) => {
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        });
    }

    //마우스를 똇을때 등록한 이벤트 제거
    handleMouseUp = (e) => {
        document.body.removeEventListener('mousemove',this.handleMouseMove);
        window.removeEventListener('mouseup',this.handleMouseUp);
    }

    //separator 클릭할떄
    handleSeparatorMouseDown = (e) => {
        document.body.addEventListener('mousemove',this.handleMouseMove);
        window.addEventListener('mouseup',this.handleMouseUp);
    }    

    render(){
        const { header, editor, preview } = this.props;

        const { leftPercentage } = this.state;
        const { handleSeparatorMouseDown } = this;

        const leftStyle = {
            flex: leftPercentage
        };

        const rightStyle = {
            left: 1-leftPercentage
        };

        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        };

        return(
            <div className={('editor-template')}>
                {header}
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
                        onMouseDown={handleSeparatorMouseDown}
                        />                        
                </div>
            </div>
        )
    }
}

export default EditorTemplate;
