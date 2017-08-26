import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { add_count } from '../actions/actionCreators/counter';

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_count(count){
            dispatch(add_count(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)