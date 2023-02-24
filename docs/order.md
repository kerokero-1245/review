# Order

`Order` は注文を表現するリソースです。

```json
{
  "id": "5XGNMiCS56", 
  "serviceId": "0x3SUBYOax",
  "status": "CREATED"
}
```

`Order` には以下のフィールドが存在します。

- id: 注文リソースを一意に特定するための**文字列**です。
- serviceId: どのサービスが注文されたかを特定する**文字列**です。
- status: 注文リソースの状態を示す**文字列**です。 `CREATED` または `PROCESSED` の値を取ります。

※ 実際には他にも様々なフィールドを持つことが想定されますが、問題とは関係ありません。

`Order` の操作のため、以下のAPIが提供されています。

**※ これらのAPIは実際には提供されていないため、呼び出すことはできませんので注意してください。**

## Orderの作成
```
POST https://api.yourmystar.jp/orders
```

### リクエストパラメータ
`serviceId` をJSON形式で設定してください。
リクエストボディに以下のパラメータをJSON形式で設定してください。

- `serviceId`: 注文するサービスのID

```json
{
  "serviceId": "0x3SUBYOax"
}
```

### レスポンス
レスポンスボディに作成された `Order` リソースがJSON形式で設定されます。
`id`にはランダムな文字列が自動的に採番され、`status`フィールドには`CREATED`が設定されます。

```json
{
  "id": "5XGNMiCS56",
  "serviceId": "0x3SUBYOax",
  "status": "CREATED"
}
```

## Orderの取得
```
GET https://api.yourmystar.jp/orders/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。

### リクエスト
パラメータは必要ありません。

### レスポンス
レスポンスボディに指定したIDを持つ `Order` リソースがJSON形式で設定されます。

```json
{
  "id": "5XGNMiCS56",
  "serviceId": "0x3SUBYOax",
  "status": "CREATED"
}
```

## Orderの更新
```
PATCH https://api.yourmystar.jp/orders/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。

### リクエスト
更新したいフィールドと値をリクエストボディにJSON形式で指定してください。
`Order` リソースの全てのフィールドを含める必要はありません。

```json
{
  "serviceId": "df751c8678"
}
```

### レスポンス
レスポンスボディに更新された `Order` リソースがJSON形式で設定されます。

```json
{
  "id": "5XGNMiCS56",
  "serviceId": "df751c8678",
  "status": "CREATED"
}
```

## Orderの削除
```
DELETE https://api.yourmystar.jp/orders/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。 

### リクエスト
パラメータは必要ありません。

### レスポンス
指定されたIDを持つ `Order` リソースを削除します。
レスポンスボディは存在しません。
