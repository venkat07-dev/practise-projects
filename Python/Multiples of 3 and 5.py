a=int(input('Enter the Number  '))
b=0
for i in range(1,a):
    if ((i%3 ==0) or (i%5 ==0)):
        b=b+i
    

print("count = ",b)
