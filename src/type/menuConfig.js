import Loadable from '../components/Loadable'

const Tip1 = Loadable(() => import('../page/Test/Tip1'))
const Tip2 = Loadable(() => import('../page/Test/Tip2'))
const Tip11 = Loadable(() => import('../page/Test2/Tip11'))
const Tip22 = Loadable(() => import('../page/Test2/Tip22'))
const Handle = Loadable(() => import('../page/Handle'))
const Hidden = Loadable(() => import('../page/Hidden'))
const menuList = [
    {
        title: 'Handle',
        path: '/Handle',
        components: Handle
    },
    {
        title: 'Hidden',
        path: '/Hidden',
        components: Hidden,
        hiddenMenu: true,
    },
    {
        title: 'Test1',
        path: '/Test1',
        children: [
            {
                title: 'Tip1',
                path: '/Test1/Tip1',
                components: Tip1
            },
            {
                title: 'Tip2',
                path: '/Test1/Tip2',
                components: Tip2
            },
        ]
    },
    {
        title: 'Test2',
        path: '/Test2',
        children: [
            {
                title: 'Tip11',
                path: '/Test2/Tip11',
                components: Tip11
            },
            {
                title: 'Tip22',
                path: '/Test2/Tip22',
                components: Tip22
            },
        ]
    },
];
export default menuList;