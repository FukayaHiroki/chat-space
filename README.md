# README
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: :member
- has_many :messages

## groupeテーブル

|Column|Type|Options|
|------|----|-------|
|comment_id|integer|null: , foreign_key: true|
|user_id|integer|null: ,foreign_key: true|
|groupe_name|string|null: false,|

### Association
- has_many :users through: :member
- has_many :messages

## messageグループ
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|null: true, |

### Association
- belongs_to :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

