module.exports = {
  entry: './src/index.ts',
  output: {
    path: './dist',
    filename: "bundle.js",
    libraryTarget: 'umd',
    library: 'remoteDom'
  },
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
  module: {
    rules: [
		{
			test: /\.ts$/,
			use: [
                {	
				 loader: 'awesome-typescript-loader',
				   options: {
					 configFileName: 'tsconfig.webpack.json'
				   } 			
				}
			]
		},	
		/*{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}*/
    ]
  }
};
