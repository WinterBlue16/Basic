# 두 개의 리스트를 각각 key, value로 하여 dict를 생성
dessert = ['쿠키', '마들렌', '마카롱', '케이크']
num = [1,2,3,4]

# code 1
dessert_dic1 = { name: value for name, value in zip(dessert, num) }
print(dessert_dic1)

# code 2
dessert_dic2=dict(zip(num, dessert))
print(dessert_dic2)