import { connect } from 'react-redux';
import Router from 'next/router';

const Layout = props => {

    const { currentUser } = props;

    const logout = () => {
        Router.push('/auth').then(() => {
            props.dispatch({ type: 'LOGOUT' })
        });
    }

    return (
        <div className='layout'>
            <div className='topbar'>
                <div>
                    {currentUser ? `${currentUser.firstname} ${currentUser.lastname}` : ''}
                </div>
                <div className='menu'>
                    <div>
                        Home
                    </div>
                    <div>
                        Admin
                    </div>
                    <div onClick={logout}>
                        Logout
                    </div>
                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>
            <style jsx global>{`
                body {
                 margin: 0;
                }
            `}</style>
            <style jsx>{`
                .layout {
                    margin: 0;
                    position: relative;
                }
                .topbar {
                    padding: 0 20px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 64px;
                    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .content {
                    position: absolute;
                    top: 64px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding: 20px;
                }
                .menu {
                    display: flex;
                    
                }
                .menu div {
                    cursor: pointer;
                    margin-right: 8px;
                }
            `}</style>
        </div>
    )
}

export default connect(state => state.User)(Layout);