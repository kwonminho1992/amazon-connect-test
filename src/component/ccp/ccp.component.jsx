
import React, { Component } from "react";
import "amazon-connect-streams";

class CCP extends Component {
    constructor(props) {
        super(props);
        this.ccp = React.createRef();
    }

    componentDidMount() {
        window.connect.core.initCCP(this.ccp.current, {
            ccpUrl: "https://kwonminhosecond.my.connect.aws",
            loginPopup: false,
            region: "ap-northeast-2",
            softphone: {
                allowFramedSoftphone: true,
                disableRingtone: false,
            },
        });
    }

    componentWillUnmount() {
        window.connect.core.terminate();
        if(this.ccp.current) {
            var iframe = this.ccp.current.firstElementChild;
            this.ccp.current.removeChild(iframe);
        }
    }

    render() {
        return (
            <div className="ccp-container" style={({ height:"800px", border: "2px solid"})}>
                <div id="ccp" className="ccp" ref={this.ccp} style={({ height:"100%", width: "100%"})} />
            </div>
        );
    }
}

export default CCP;
