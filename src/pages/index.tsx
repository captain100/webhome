import styles from './index.less';
import { Breadcrumb, Layout, Card } from 'antd';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function IndexPage() {
  return (
    <Layout className={styles['layout']}>
      <Header>
        <div className="logo" />
        <span style={{ color: '#FFF', fontSize: '18px' }}>我的工具小站</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Card
            onClick={() => {
              location.href = 'http://82.157.63.61:8097/';
            }}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="http://wyy.photowww.com/183new/XTApp/11501/1150120220106005/XT//044.jpg"
              />
            }
          >
            <Meta
              title="我们结婚请柬"
              description="http://www.qslovexxs.space/invitation"
            />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>京ICP备2022003296号</Footer>
    </Layout>
  );
}
