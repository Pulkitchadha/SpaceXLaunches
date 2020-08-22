import React, { Component } from 'react';

import ProgramCard from './ProgramCard';

export default class ProgramList extends Component {
    componentDidMount() {
        if (!this.props.programs?.length) {
            this.props.getPrograms();
        }
    }

    render() {
        const { programs, loading, error } = this.props;

        if (loading) return (
            <div className="App text-center pt-5">
                <span className="h3">Loading...</span>
            </div>
        )
        if (error) return (
            <div className="App text-center pt-5">
                <span className="h3 text-danger">Something went wrong.</span>
            </div>
        )
        if (!programs.length) return (
            <div className="col-sm-12 text-center pt-5">
                <span className="h3">No launch program found.</span>
            </div>
        )

        return (
            <div className="row">
                {
                   programs.map(program => (
                        <div className="col-sm-3 mt-4" key={program.flight_number}>
                            <ProgramCard program={program} />
                        </div>
                    )) 
                }
            </div>
        )
    }
}