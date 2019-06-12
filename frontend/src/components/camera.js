import React, { Component } from 'react'
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import firebase from '../firebase';
import Upload from '../components/upload';
import AuthContext from '../contexts/auth';


class Camera extends Component {
    static contextType = AuthContext;
    constructor(props, context) {
        super(props, context);
        this.cameraPhoto = null;
        this.videoRef = React.createRef();
        this.state = {
            dataUri: '',
            user: this.context
        }
    }

    componentDidMount() {
        // We need to instantiate CameraPhoto inside componentDidMount because we
        // need the refs.video to get the videoElement so the component has to be
        // mounted.
        this.cameraPhoto = new CameraPhoto(this.videoRef.current);
        console.log('context', this.context)

    }

    startCamera(idealFacingMode, idealResolution) {
        this.cameraPhoto.startCamera(idealFacingMode, idealResolution)
            .then(() => {
                console.log('camera is started !');
            })
            .catch((error) => {
                console.error('Camera not started!', error);
            });
    }

     getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    takePhoto() {
        const config = {
            sizeFactor: 1
        };

        let dataUri = this.cameraPhoto.getDataUri(config);
        console.log('dataURI is...', dataUri)
        const storageRef = firebase.storage().ref();
        const testRef = storageRef.child(`${this.state.user}/${this.getRandomInt(10)}.jpg`)
        testRef.putString(dataUri, 'data_url').then((snapshot) => {
            console.log('Uploaded a data_url string!', snapshot);
            snapshot.ref.getDownloadURL().then(url => {
                const db = firebase.database();
                console.log(url, this.state.user)
                var newImageKey = firebase.database().ref('users/' + this.state.user).child('coupons').push().key;
                var updates = {};
                var newObj = {
                    url: url,
                    tags: ["tags will go here"]
                }
                updates['users/' + this.state.user + '/coupons/' + `coupon${this.getRandomInt(1000)}`] = [newObj];
                firebase.database().ref().update(updates);
            })
          });
        this.setState({ dataUri });
    }

    stopCamera() {
        this.cameraPhoto.stopCamera()
            .then(() => {
                console.log('Camera stoped!');
            })
            .catch((error) => {
                console.log('No camera to stop!:', error);
            });
    }

    showPic = () => {
        if (this.state.dataUri) {
            return <img alt="imgCamera" src={this.state.dataUri} />
        }
    }
    render() {
        console.log(this.state.dataUri)
        console.log('user',this.state.user)
        return (
            <div className="container">
                <div className="row" >
                    <Upload />
                </div>

                <div className="row">
                    <div className="col text-center">
                        <video
                            ref={this.videoRef}
                            autoPlay={true}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col text-right">
                        <button className="btn btn-success" onClick={() => {
                            let facingMode = FACING_MODES.ENVIRONMENT;
                            let idealResolution = { width: 640, height: 480 };
                            this.startCamera(facingMode, idealResolution);
                        }}>Start Camera</button>
                    </div>

                    <div className="col text-center">
                        <button className="btn btn-primary" onClick={() => {
                            this.takePhoto();
                        }}>Take photo</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-danger" onClick={() => {
                            this.stopCamera();
                        }}>Stop Camera</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        {this.showPic()}
                    </div>
                </div>
            </div>
        );
    };
};

export default Camera;