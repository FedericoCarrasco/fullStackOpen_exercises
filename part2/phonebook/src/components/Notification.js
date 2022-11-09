const Notification = ({message}) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,}

    if (message === null) return null

    if (message.status === 'error') return <div style={errorStyle}>{message.content}</div>

    if (message.status === 'success') return <div style={successStyle}>{message.content}</div> 

}

export default Notification