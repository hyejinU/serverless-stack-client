const config = {
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "seoul-first-bucket",
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: " https://u4kjsh4pyl.execute-api.ap-northeast-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_hPmwsIojE",
      APP_CLIENT_ID: "r243uo5foi7317e62d22bfbmr",
      IDENTITY_POOL_ID: "ap-northeast-2:c247801b-c615-454d-8d7a-2f3612b9f653",
    },
  };
  
  export default config;