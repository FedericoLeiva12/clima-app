import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";

export default function MainLayout(props) {
  return (
    <Layout>
      <Header>
        {props.header}
      </Header>
      <Content>
        {props.content}
      </Content>
    </Layout>
  )
}
