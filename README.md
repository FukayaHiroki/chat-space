# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index :true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through: :members
- has_many :messages
- has_many :members

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|
|image|string|

### Association
- belongs_to :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

