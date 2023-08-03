n = int(input())
while n>0:
    if(n%2==0 and n>0):
        n-=11
    elif(n%2!=0 and n>0):
        n-=21
print(n)