import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import NotFound from '../components/NotFound';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {goRandom: () => push('/')}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
