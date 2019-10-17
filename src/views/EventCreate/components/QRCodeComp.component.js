import React from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import QRCode from 'react-native-qrcode'
=======
import QRCode from 'react-qr-code'
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde

class QRCodeComp extends React.Component {
  generateQRData = () => {
    const { eventID, eventName, eventDescription } = this.props
    const data = JSON.stringify({
      user: this.props.user,
      eventID,
      eventName,
      eventDescription
    })
    return data
  }

  render () {
    return (
      <QRCode value={this.generateQRData()} size={300} />
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducer.username }
}

export default connect(mapStateToProps)(QRCodeComp)
