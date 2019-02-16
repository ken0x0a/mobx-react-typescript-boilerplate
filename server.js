var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

const port = 3007;
const host = "0.0.0.0";
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true
}).listen(port, host, function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${host}:${port}`);
});
