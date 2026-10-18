import {
  defineOverridesPreferences,
  definePreferencesExtension,
} from '@vben/preferences';

interface WebAntdPreferencesExtension {
  defaultTableSize: number;
  enableFormFullscreen: boolean;
  reportTitle: string;
  tenantMode: 'multi' | 'single';
}

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    /** 后端路由模式 */
    accessMode: 'backend',
    name: import.meta.env.VITE_APP_TITLE,
    defaultAvatar: '/avatar-placeholder.svg',
    enableRefreshToken: true,
    contentCompact: 'wide',
  },
  breadcrumb: {
    /** 顶栏为深绿色，只保留紧凑的文字导航 */
    enable: true,
    showHome: false,
    showIcon: false,
    styleType: 'normal',
  },
  footer: {
    /** 默认关闭 footer 页脚，因为有一定遮挡 */
    enable: false,
    fixed: false,
  },
  header: {
    /** 对齐 FortiGate 控制台的 48px 顶栏 */
    enable: true,
    height: 48,
    mode: 'fixed',
    menuAlign: 'start',
  },
  logo: {
    enable: true,
    fit: 'contain',
    logoMode: 'icon',
    showText: true,
    source: '/industrial-logo.svg',
    sourceDark: '/industrial-logo.svg',
  },
  navigation: {
    accordion: true,
    split: false,
    styleType: 'plain',
  },
  sidebar: {
    collapsed: false,
    collapsedButton: true,
    collapsedShowTitle: false,
    collapseWidth: 56,
    draggable: false,
    enable: true,
    expandOnHover: true,
    fixedButton: true,
    mixedWidth: 64,
    width: 236,
  },
  tabbar: {
    enable: true,
    height: 34,
    showIcon: false,
    showMaximize: true,
    showMore: true,
    showRefresh: true,
    styleType: 'plain',
  },
  transition: {
    /** 工业控制台强调即时反馈，关闭页面切换动画 */
    enable: false,
    loading: false,
    name: 'fade-slide',
    progress: true,
  },
  theme: {
    builtinType: 'default',
    colorDestructive: 'hsl(5 65% 52%)',
    colorPrimary: 'hsl(132 34% 43%)',
    colorSuccess: 'hsl(132 40% 38%)',
    colorWarning: 'hsl(35 100% 47%)',
    fontSize: 13,
    mode: 'light',
    radius: '0.125',
    semiDarkHeader: false,
    semiDarkSidebar: false,
    semiDarkSidebarSub: false,
  },
  copyright: {
    companyName: import.meta.env.VITE_APP_TITLE,
    companySiteLink: 'https://gitee.com/yudaocode/yudao-ui-admin-vben',
  },
});

export const preferencesExtension =
  definePreferencesExtension<WebAntdPreferencesExtension>({
    tabLabel: 'preferences.antd.tabLabel',
    title: 'preferences.antd.title',
    fields: [
      {
        component: 'switch',
        defaultValue: true,
        key: 'enableFormFullscreen',
        label: 'preferences.antd.fields.enableFormFullscreen.label',
        tip: 'preferences.antd.fields.enableFormFullscreen.tip',
      },
      {
        component: 'select',
        defaultValue: 'single',
        key: 'tenantMode',
        label: 'preferences.antd.fields.tenantMode.label',
        options: [
          {
            label: 'preferences.antd.fields.tenantMode.options.single.label',
            value: 'single',
          },
          {
            label: 'preferences.antd.fields.tenantMode.options.multi.label',
            value: 'multi',
          },
        ],
      },
      {
        component: 'number',
        componentProps: {
          max: 200,
          min: 10,
          step: 10,
        },
        defaultValue: 20,
        key: 'defaultTableSize',
        label: 'preferences.antd.fields.defaultTableSize.label',
      },
      {
        component: 'input',
        defaultValue: '',
        key: 'reportTitle',
        label: 'preferences.antd.fields.reportTitle.label',
        placeholder: 'preferences.antd.fields.reportTitle.placeholder',
      },
    ],
  });
