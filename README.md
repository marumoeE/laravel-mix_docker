# How to use

## Dockerの操作
```bash
# 環境起動
docker-compose up -d

# コンテナに入る
docker-compose exec app bash

# コンテナを抜ける
exit

# 環境を完了させる
docker-compose down
```

## タスクランナーの操作
※ Dockerを操作して、コンテナに入った状態で以下を実行
```bash
# 開発環境を起動
npm run watch

# 開発ビルド
npm run dev

# 本番ビルド
npm run prod
```