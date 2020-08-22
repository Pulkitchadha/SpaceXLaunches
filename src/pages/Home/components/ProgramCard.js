import React from 'react';
import PropTypes from 'prop-types';
import ProgramDetail from './ProgramDetail';

import { Card } from 'antd';
const { Meta } = Card;

function ProgramCard({ program }) {
    return (
        <Card
            style={{ width: 300 }}
            cover={<img alt="program logo" src={program?.links?.mission_patch_small} />}
        >
            <Meta
                title={<span className="text-primary">{`${program?.mission_name} #${program?.flight_number}`}</span>}
                description={<ProgramDetail program={program}/>}
            />
        </Card>
    )
}

ProgramCard.propTypes = {
    program: PropTypes.object,
}

ProgramCard.defaultTypes = {};

export default ProgramCard;

