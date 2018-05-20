const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = (env)=>{
    return {
        context:resolve('src'),
        entry:{
            filename:'./core/landingAPIs.js'
        },
        output:{
            filename:'bundle.js',
            path: resolve(__dirname, 'dist')
        },
        devtool:'inline-source-map',
        devServer: {
                contentBase: './'
        },
        plugins:[
            //new CleanWebpackPlugin(['dist']), // This module will replace the dist folder every time restarted.
            new HtmlWebpackPlugin({
                title: 'Development',
                template:'./index.html',
                inject:'head'
    }),
    new CopyWebpackPlugin([ 
            {from:'..\\polyfills\\**.js', to:'.\\polyfills\\'},
            {from:'..\\src\\css\\main.css', to:'.\\css\\'}
        ], {debug:'info'})
        ],
        module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['env']
                      }
                    }
                  }
            ]
        }
    }
}