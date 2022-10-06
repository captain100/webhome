import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '我的工具小站',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
