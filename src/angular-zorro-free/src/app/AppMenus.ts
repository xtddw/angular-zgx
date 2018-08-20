import { MenuItem } from '@yoyo/theme';

// 全局的左侧导航菜单
export class AppMenus {
    static Menus = [
        // 首页
        new MenuItem(
            'HomePage',
            '',
            'anticon anticon-home',
            '/app/home'
        ),

        // 用户中心
        new MenuItem(
            'UserManage',
            'Pages.Roles',
            'anticon anticon-safety',
            '/app/roles',
            [
                // 用户
                new MenuItem(
                    'Users',
                    'Pages.Users',
                    'anticon anticon-user',
                    '/app/users',
                ),
                // 租户
                new MenuItem(
                    'Tenants',
                    'Pages.Tenants',
                    'anticon anticon-team',
                    '/app/tenants',
                ),
                // 角色
                new MenuItem(
                    'Roles',
                    'Pages.Roles',
                    'anticon anticon-safety',
                    '/app/roles',
                ),
            ]
        ),
        // 用户
        new MenuItem(
            'SystemIntro',
            'Pages.Users',
            'anticon anticon-user',
            '',
            [
                // dcs
                new MenuItem(
                    'DCS',
                    'Pages.Users',
                    'anticon anticon-user',
                    '/app/intro/dcs',
                ),
                // 智能冶炼框架
                new MenuItem(
                    'SmartMetallurgy',
                    'Pages.Users',
                    'anticon anticon-user',
                    '/app/intro/smartmetallurgy',
                ),
                // ENFIapc
                new MenuItem(
                    'EapcIntro',
                    'Pages.Users',
                    'anticon anticon-user',
                    '/app/intro/eapcintro',
                ),
                // 使用教程
                new MenuItem(
                    'Document',
                    'Pages.Users',
                    'anticon anticon-user',
                    '/app/intro/document',
                ),
            ]
        ),
        // 关于我们
        new MenuItem(
            'About',
            '',
            'anticon anticon-info-circle-o',
            '/app/about',
        ),
    ];
}