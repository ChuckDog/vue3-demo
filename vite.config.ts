import path from "path";

// const pathAliasMap = {
//   "@/": "/src/",
//   "@views/": "/src/views/",
//   "@components/": "/src/components/",
//   "@utils/": "/src/utils/",
// };

module.exports = {
  // 导入别名
  alias: {
    "@/": path.resolve(__dirname, "/src/"),
    "@views/": path.resolve(__dirname, "/src/views/"),
    "@components/": path.resolve(__dirname, "/src/components/"),
    "@utils/": path.resolve(__dirname, "/src/utils/"),
  },
  // alias(path: string) {
  //   for (const [slug, res] of Object.entries(pathAliasMap)) {
  //     if (path.startsWith(slug)) {
  //       return path.replace(slug, res);
  //     }
  //   }
  // },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ["lodash"],
  },
  hmr: { overlay: false },
  // 为开发服务器配置自定义代理规则。
  proxy: {
    "/foo": "http://localhost:4567/foo",
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, ""),
    },
  },
  // ...
};
