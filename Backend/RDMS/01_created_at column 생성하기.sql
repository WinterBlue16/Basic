-- 데이터를 생성한 시간이 그대로 입력되는 column을 생성한다.

create table sample (
    id serial primary key,
    created_at timestamp default current_timestamp
)
;