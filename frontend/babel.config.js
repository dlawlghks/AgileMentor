module.exports = {
  presets: ['react-app'],
  plugins: [
    '@babel/plugin-proposal-private-property-in-object', // 플러그인 추가
  ],
  ignore: [
    'node_modules/**', // 특정 경로 무시
    'build/**',        // 빌드 파일 무시 (선택 사항)
  ],
};
