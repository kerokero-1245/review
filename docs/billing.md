# Billing (請求)

Billingは注文に対する請求を表すリソースです。

```json
{
  "id": "auB7hhfm6U", 
  "orderId": "5XGNMiCS56",
  "amount": 10000
}
```

Billingには以下のフィールドが存在します。

 - id: 請求リソースを一意に特定するための**文字列**です。
 - orderId: この請求が関連付けられている注文リソースを特定する**文字列**です。
 - amount: 請求金額を示す**数値**です。

※ 実際には他にも様々なフィールドを持つことが想定されますが、問題とは関係ありません。

Billingの操作のため、以下のAPIが提供されています。

**※ これらのAPIは実際には提供されていないため、呼び出すことはできませんので注意してください。**


## Billingの作成
```
POST https://api.yourmystar.jp/billings
```

### リクエストパラメータ
リクエストボディに以下のパラメータをJSON形式で設定してください。

 - `orderId`: 関連付けたい`Order`リソースの`id`フィールドの値
 - `amount`: 請求する金額

```json
{
  "orderId": "5XGNMiCS56",
  "amount": 10000
}
```

### レスポンス
レスポンスボディに作成された `Billing` リソースがJSON形式で設定されます。
`id` にはランダムな文字列が自動的に採番されます。

```json
{
  "id": "auB7hhfm6U",
  "orderId": "5XGNMiCS56",
  "amount": 10000
}
```

## Billingの取得
```
GET https://api.yourmystar.jp/billings/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。 

### リクエスト
パラメータは必要ありません。

### レスポンス
レスポンスボディに指定したIDを持つ `Billing` リソースがJSON形式で設定されます。

```json
{
  "id": "auB7hhfm6U",
  "orderId": "5XGNMiCS56",
  "amount": 10000
}
```

## Billingの更新
```
PATCH https://api.yourmystar.jp/billings/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。

### リクエスト
更新したいフィールドと値をリクエストボディにJSON形式で指定してください。
`Billing` リソースの全てのフィールドを含める必要はありません。

```json
{
  "amount": 20000
}
```

### レスポンス
レスポンスボディに更新された `Billing` リソースがJSON形式で設定されます。

```json
{
  "id": "auB7hhfm6U",
  "orderId": "5XGNMiCS56",
  "amount": 20000
}
```

## Billingの削除
```
DELETE https://api.yourmystar.jp/billings/:id
```
※ `:id` はパスパラメータです。操作したいリソースのIDを指定します。 

### リクエスト
パラメータは必要ありません。

### レスポンス
指定されたIDを持つ `Billing` リソースを削除します。
レスポンスボディは存在しません。