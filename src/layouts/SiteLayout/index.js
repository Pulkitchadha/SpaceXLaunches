import React, { Component } from 'react';
import { Layout } from 'antd';
import Filter from './components/Filter';
const { Header, Footer, Sider, Content } = Layout;

export default class SiteLayout extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: "#fff" }}>
                    <span className="h3 font-weight-bold">SpaceX Launch Programs</span>
                </Header>
                <Layout>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-2">
                            <Sider style={{ background: "#fff" }} width="100%">
                                <Filter />
                            </Sider>
                        </div>
                        <Layout className="col-md-10" style={{ padding: '0 24px 24px' }}>
                            <Content
                                style={{
                                    padding: 15,
                                    margin: 0,
                                    minHeight: 570,
                                }}
                            >
                                {this.props.children}
                            </Content>
                            <Footer className="text-center">
                                <span className="h5 text-dark font-weight-bold">Developed By:</span>
                                <span className="h5">Pulkit Chadha</span>
                            </Footer>
                        </Layout>
                    </div>
                </Layout>
            </Layout>
        )
    }
}