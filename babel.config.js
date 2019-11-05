// arquivo para configuracao do babel que e responsavel por fazer a 
// modificacao dos arquivos para que o navegador entenda
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};