const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
    entry: {
        texteditor: path.resolve(__dirname, 'src/texteditor'),
        datatable: path.resolve(__dirname, 'src/datatable'),
    },
    output: {
        filename: "[name]/[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './src'
                        }
                    },
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/[name].css"
        })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            texteditorStyles: {
              name: 'texteditor',
              test: (m,c,entry = 'texteditor') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true
            },
            datatableStyles: {
              name: 'datatable',
              test: (m,c,entry = 'datatable') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true
            },
          }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};
