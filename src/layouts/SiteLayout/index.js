import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class SiteLayout extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: "#fff" }}>
                    <span className="h3 font-weight-bold">SpaceX Launch Programs</span>
                </Header>
                <Layout>
                    <Sider style={{ background: "#fff" }} width={200} className="site-layout-background">
                        <span>Sider</span>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                padding: 15,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                        <Footer className="text-center">
                            <span className="h5 font-weight-bold">Developed By: Pulkit Chadha</span>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}