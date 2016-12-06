import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchRandom from '../components/FetchRandom';
import { fetchRandomArticle } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {fetchRandomArticle}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FetchRandom);
