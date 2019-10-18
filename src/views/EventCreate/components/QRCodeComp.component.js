import React from 'react'
import { connect } from 'react-redux'
import QRCode from 'react-qr-code'

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
      <QRCode value={this.generateQRData()} size={100} />
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducer.username }
}

export default connect(mapStateToProps)(QRCodeComp)
