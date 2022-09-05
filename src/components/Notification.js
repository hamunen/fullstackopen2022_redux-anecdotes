import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification 
  //useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return notification ? <div style={style}> {notification} </div> : null
}
const mapStateToProps = (state) => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification