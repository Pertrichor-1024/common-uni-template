import { isPro } from '@/utils/platform';

// TODO-Custom 自定义测试/正式服务器套接字

const dev = '';

const pro = '';

export const service = isPro() ? pro : dev;
