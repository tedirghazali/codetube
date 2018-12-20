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
        cteditor: path.resolve(__dirname, 'src/cteditor'),
        cttable: path.resolve(__dirname, 'src/cttable'),
    },
    output: {
        library: "[name]",
        libraryTarget: 'window',
        libraryExport: 'default',
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
              name: 'cteditor',
              test: (m,c,entry = 'cteditor') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true
            },
            datatableStyles: {
              name: 'cttable',
              test: (m,c,entry = 'cttable') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
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
