# README
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign: |
|email|string|null: false, foreign_key: |

### Association
- has_many :groups, through: :member
- has_many :messages

## groupeテーブル

|Column|Type|Options|
|------|----|-------|
|comment_id|integer|null: , foreign_key: |
|user_id|integer|null: ,foreign_key: |
|groupe_name|string|null: ,foreign_key: |

### Association
has_many :users through: :member
has_many :messages

## messageグループ
|Column|Type|Options|
|------|----|-------|
|text|text|null: false, foreign_key:|
|user_id|integer|null: false, foreign_key: |
|group_id|integer|null: false, foreign_key:|
||||

### Association

belongs_to :group
belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

