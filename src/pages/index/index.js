import { connect } from 'react-redux';

import { getPrograms, applyFilter } from 'store/programs/actions';
import ProgramList from './components/ProgramList';

const mapStore = ({ programs  }) => ({
    programs: programs.programs,
    loading: programs.loading,
    error: programs.error,
})

const mapDispatch = {
    getPrograms,
    applyFilter
}

export default connect(mapStore, mapDispatch)(ProgramList);