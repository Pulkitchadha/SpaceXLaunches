import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';

import { applyFilter } from 'store/programs/actions';

const launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

class Filter extends Component {
    state = {
        launchYear: 2020,
        launchSuccess: 'true',
        landSuccess: 'true',
    }

    onChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value })
        this.setState({ [name]: value }, () => this.props.applyFilter(this.state));
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <span className="h5 ml-2">Filters</span>
                </div>
                <div className="col-sm-12 text-center mt-2">
                    <span className="h6 ml-2"><u>Launch Year</u></span><br/>
                    <Radio.Group name="launchYear" onChange={this.onChange} defaultValue={this.state.launchYear}>
                        {launchYears.map(year => <Radio.Button key={year} className="mt-3 text-success" value={year}>{year}</Radio.Button>)}
                    </Radio.Group>
                </div>
                <div className="col-sm-12 text-center mt-2">
                    <span className="h6 ml-2"><u>Successful Launch</u></span><br/>
                    <Radio.Group name="launchSuccess" onChange={this.onChange} defaultValue={this.state.landSuccess}>
                        <Radio.Button className="mt-3 text-success" value="true">True</Radio.Button>
                        <Radio.Button className="mt-3 text-success" value="false">False</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="col-sm-12 text-center mt-2">
                    <span className="h6 ml-2"><u>Successful Landing</u></span><br/>
                    <Radio.Group name="landSuccess" onChange={this.onChange} defaultValue={this.state.landSuccess}>
                        <Radio.Button className="mt-3 text-success" value="true">True</Radio.Button>
                        <Radio.Button className="mt-3 text-success" value="false">False</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
        );
    }
}

const mapDispatch = { applyFilter }

export default connect(null, mapDispatch)(Filter);