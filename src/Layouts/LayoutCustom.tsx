import { Layout, /*Menu,*/ Breadcrumb } from 'antd';
// import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';
// import {Routes} from "../Routes/Routes";
// import {Link} from "react-router-dom";
import { CustomCards } from './CustomCards'
import {IContentModel} from "../Interfaces/interface";
import { useLocalStorage } from "../index";
import {observer} from "mobx-react-lite";
import Inher from "../Interfaces/inher";
import {FooterNow} from "./FooterFor";

const { Content } = Layout;


export const LayoutCustom = observer(() =>{
    const { content } = useLocalStorage()
    return(
        <>
            <Layout className="layout">

                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   content.map((content: IContentModel) =>{
                            return(
                                <CustomCards key={content.id} content = { content } />
                            )
                        })
                        }
                    </div>
                    <Inher></Inher>
                    <Forms></Forms>
                    <FooterNow></FooterNow>
                </Content>
            </Layout>,
        </>
    )
})

// export const Layout1 = () =>{
//     return(
//         <>
//             <div>test</div>
//         </>
//     )
// }