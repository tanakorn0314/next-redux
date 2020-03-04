import { connect } from "react-redux"
import Layout from '../src/components/Layout';
import User from "../src/components/User";

const HomePage = props => {
    return (
        <Layout>
            <div className='user-list'>
                {props.users.map((user, index) => (
                    <User key={index} isLogin={props.currentUser === user} {...user} />
                ))}
            </div>
            <style jsx>{`
                .user-list {
                    display: flex;
                    flex-wrap: wrap;
                }
            `}</style>
        </Layout>
    )
}

export default connect(state => state.User)(HomePage)