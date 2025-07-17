1. docker-compose.ymlがあるディレクトリに移動します。
cd ~/root/react_lab

2. コンテナをdocker composeで起動します。
docker compose up -d

3. VSCodeのremote container拡張機能でコンテナにアタッチします。
以降は終了時以外VSCode内で操作します。

4. nodeが使えることを確認してください。
> node -v

5. AppNameには適当なアプリ名を入れて、プロジェクトを作成してください。
> cd frontend_app （アプリを作成するフォルダに移動）
> npx create-react-app [AppName]

6. テストが実行できることを確認してください。
> cd [AppName] （package.jsonがあるディレクトリに移動）
> npm test

7. アプリが実行できることを確認してください。
※初回はかなり時間がかかるかと思います。
> npm start
ブラウザで「localhost:3000」にアクセス


99. 終了時
VSCodeでClose remote container(?)
shellで
> docker compose down

