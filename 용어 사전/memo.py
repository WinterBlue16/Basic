# def solution(numbers):
#     length=len(numbers)
#     num=map(str, numbers) # str 리스트로 변경
#     num=sorted(num, reverse=True) # 첫 번째 숫자에 따라 정렬
#     i=0
#     count=0

#     # 첫 수의 마지막 숫자와 두 번째 수의 첫번째 숫자가 모두 1이어야 한다.

#     while True:
#         if num[i][0]!=num[i+1][0]:
#             i=i-count
#             if len(num[i]) > len(num[i+1]) and num[i][-1] < num[i][0]:
#                 num[i],num[i+1]=num[i+1], num[i]
#                 count+=1
#                 i+=1

#     print(num)
#     answer=str(int(''.join(num)))
#     return answer


# if __name__=="__main__":
#     x=list(map(int,input().split()))
#     print(solution(x))

# print(sorted(['21', '212'], reverse=True))
# 주요 예제 : [121, 12], [212, 21], [0, 0, 0, 70], [3, 34, 30, 5, 9]

# x=[4, 2, 20, 200, 11, 2000, 34, 3]
# # x=[2, 20, 200, 11, 2000]
# # x=[3, 30, 34, 5, 9]
# # x=[2, 121, 12,5, 60]
# # x=[403, 40]
# # x=[212, 21]

# def solution(x):
#     length=len(x)
#     x=sorted(map(str, x), reverse=True)
#     i=0
#     count=0
#     r_count=0

#     while True:
#         if x[i][0]==x[i+1][0] and len(x[i]) > len(x[i+1]): # 첫 번째 숫자가 같고, i의 자릿수가 더 크다
#             if x[i][-1] < x[i+1][0] or x[i][-1]==x[i+1][0]=='1':
#                 x[i], x[i+1]=x[i+1], x[i]
#                 i+=1
#                 count+=1
#                 if i==(length-1):
#                     if r_count > 2:
#                         break
#                     else:
#                         i=i-count
#                         count=0
#                         r_count+=1
                
#             else:
#                 i+=1
#                 if i==(length-1):
#                     break
                    
                
#         else: # 무한루프 발생 # i의 자릿수가 i+1보다 더 작거나 같고 or 첫 번째 숫자가 다르다
#             if x[i][0]==x[i+1][0] and count > 1:
#                 i=i-count
#                 count=0
#                 r_count+=1
            
#             else:
#                 if r_count > 2:
#                     break
                    
#                 else:
#                     if count < 1:
#                         i+=1                
#                         if i==(length-1):
#                             break
                        
#                     else:
#                         i=i-count
#                         count=0
#                         r_count+=1
#                         # 무한루프 발생 # 정렬 완료 후에도 루프 반복 # r_count로 해결
                    
                                                   
#     answer=str(int(''.join(x)))
#     return answer

    # x=[4, 2, 20, 200, 11, 2000, 34, 3]
x=[2, 202, 2002]
# x=[3, 30, 34, 5, 9]
# x=[2, 121, 12,5, 60]
# x=[405, 40]
# x=[212, 21]
# x=[2, 22, 223]
# x=[0,0,0,70]
# x=[5, 50, 500, 5000, 50000]
# x=[212, 21]
# x=[99,998]

# 반례 목록
# x=[212, 21]
# x=[242,24]
# x=[1321, 132]
# x=[1000, 0, 5, 99, 100]
# x=[1001, 101, 1]

def solution(x):
    length=len(x)
    x=sorted(map(str, x), reverse=True)
    print(x)
    i=0 # 인덱스
    count=0 # 스왑 카운트
    r_count=0

    while True:
        r_count+=1
        if r_count > 1: 
            if i==0 and count==0:
                break
        else:
            if x[i][0]==x[i+1][0] and len(x[i]) != len(x[i+1]): # 첫 번째 숫자가 같고, i의 자릿수가 더 크다
                if x[i]+x[i+1] < x[i+1]+x[i]: # 그냥 더했을 때보다 바꿔서 더했을 때 더 클 경우
                    x[i], x[i+1]=x[i+1], x[i] # i, i+1 스왑
                    i+=1
                    count+=1
                    print('스왑 {}'.format(count)) 

                    if i==(length-1): # 인덱스 에러 방지
                        i=0
                        count=0
                else: 
                    i+=1 # 위치를 유지하고 다음 인덱스로 넘어간다
                    if i==(length-1): 
                        i=0
                        count=0
                        
            else: # 무한루프 발생 # i의 자릿수가 i+1보다 더 작거나 같고 or 첫 번째 숫자가 다르다
                if x[i]+x[i+1] < x[i+1]+x[i]: # 그냥 더했을 때보다 바꿔서 더했을 때 더 클 경우
                    x[i], x[i+1]=x[i+1], x[i] # i, i+1 스왑
                    i+=1
                    count+=1
                    print('스왑 {}'.format(count))

                    if i==(length-1): # 인덱스 에러 방지
                        i=0
                        count=0
                
    print(x)                                               
    answer=str(int(''.join(x)))
    return answer

if __name__=="__main__":
    x=list(map(int,input().split()))
    print(solution(x))