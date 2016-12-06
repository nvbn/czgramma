import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import Workplace from '../components/Workplace';
import { fetchArticle } from '../actions';

const mapStateToProps = ({article}, {params}) => ({
  article,
  title: params.title,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {fetchArticle, goNext: () => push('/')},
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Workplace);
