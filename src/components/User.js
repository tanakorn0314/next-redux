const User = props => {
    return (
        <div className={`user-container ${props.isLogin && 'isLogin'}`}>
            <div>Name: {props.firstname} {props.lastname}</div>
            <div>Email: {props.email} </div>
            <style jsx>{`
                .user-container {
                    width: 180px;
                    height: 200px;
                    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
                    margin: 8px;
                    padding: 8px;
                    border-radius: 8px;
                }
                .isLogin {
                    box-shadow: 0 0 6px 0 rgba(0,255,0,.65);
                }
            `}</style>
        </div>
    )
}

export default User;