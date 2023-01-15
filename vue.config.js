// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  devServer: {
    // proxy: {
    //   '/api': {
    //     // 'api'로 들어오면 포트 3005(스프링 서버)로 보낸다 
    //     target: 'http://localhost:3005',
    //     changeOrigin: true //cross origin 허용
    //   }
    // }
    proxy: 'http://localhost:3005'
  }
};
