import React from 'react';
import PropTypes from 'prop-types';

const ProgramDetail = ({ program }) => (
    <div className="row">
        <div className="col-sm-12">
            <span className="col-sm-4 text-dark font-weight-bold">Mission Ids:</span>
            <span className="col-sm-8">{program?.mission_id?.length ? program?.mission_id.join(', ') : 'NA'}</span>
        </div>
        <div className="col-sm-12">
            <span className="col-sm-4 text-dark font-weight-bold">Launch Year:</span>
            <span className="col-sm-8">{program?.launch_year || 'NA'}</span>
        </div>
        <div className="col-sm-12">
            <span className="col-sm-6 text-dark font-weight-bold">Successful Launch:</span>
            <span className="col-sm-6">{program?.launch_success?.toString()}</span>
        </div>
        <div className="col-sm-12">
            <span className="col-sm-6 text-dark font-weight-bold">Successful Landing:</span>
            <span className="col-sm-6">{program?.rocket?.first_stage?.cores?.length ? program?.rocket?.first_stage?.cores[0]?.land_success?.toString() : 'NA'}</span>
        </div>
    </div>
)

ProgramDetail.propTypes = {
    program: PropTypes.object,
}

ProgramDetail.defaultTypes = {};

export default ProgramDetail;

