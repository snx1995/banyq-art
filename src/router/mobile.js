import Test from '../components/mobile/test'

export default {
    path: '/mobile',
    name: 'mobile',
    redirect: '/mobile/test',
    component: () => import('../components/mobile'),
    children: [
        {
            path: 'test',
            component: Test
        },
        {
            path: 'test2',
            component: () => import('../components/mobile/test2')
        }
    ]
}