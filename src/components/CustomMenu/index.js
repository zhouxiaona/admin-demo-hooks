import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import menuList from '../../type/menuConfig.js'
import { Menu } from 'antd';
const { SubMenu } = Menu;
const MenuItem = Menu.Item

const CustomMenu = (props) => {
    const [selectedKeys, setSelectedKeys] = useState([])
    const [openKeys, setOpenKeys] = useState([])
    const [menuTreeNode, setMenuTreeNode] = useState(null)

    useEffect(() => {
        const menuTreeNode = renderMenu(menuList)
        setMenuTreeNode(menuTreeNode)
    }, [])

    useEffect(() => {
        pathHandle(props.location.pathname)
    }, [props.location.pathname])

    // 切换菜单
    const selectHandle = ({ item, key, keyPath, domEvent }) => {
        const pathname = keyPath[0]
        pathHandle(pathname)
    }

    // 处理路由
    const pathHandle = (pathname) => {
        const rank = pathname.split('/')
        switch (rank.length) {
            case 2:
                if (!!rank[1]) {
                    setSelectedKeys([pathname])
                    setOpenKeys([])
                } else {
                    if (menuList[0].children) {
                        setSelectedKeys([menuList[0].children[0].path])
                        setOpenKeys([menuList[0].children[0].path])
                    } else {
                        setSelectedKeys([menuList[0].path])
                        setOpenKeys([menuList[0].path])
                    }
                }
                break;
            case 3:
                setSelectedKeys([pathname])
                setOpenKeys(['/' + rank[1]])
                break;
            default:
                setSelectedKeys([])
                setOpenKeys([])
        }
    }

    // 切换左侧菜单收起放开
    const onOpenChange = (openKeys) => {
        if (openKeys.length === 0 || openKeys.length === 1) {
            setOpenKeys(openKeys)
            return
        }
        const latestOpenKey = openKeys[openKeys.length - 1]
        setOpenKeys([latestOpenKey])
    }

    // 渲染侧导航栏
    const renderMenu = data => {
        return data.map(item => {
            if (!item.hiddenMenu) {
                if (item.children) {
                    return (
                        <SubMenu title={item.title} key={item.path}>
                            {renderMenu(item.children)}
                        </SubMenu>
                    );
                }
                return (
                    <MenuItem title={item.title} key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </MenuItem>
                );
            }
        });
    }

    return (
        <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            style={{ height: '100%', borderRight: 0 }}
            onSelect={selectHandle}
            onOpenChange={onOpenChange}
            theme={'dark'}
        >
            {menuTreeNode}
        </Menu>
    )
}

export default withRouter(CustomMenu);
