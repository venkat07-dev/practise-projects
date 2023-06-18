a,b=0,1
tot=0
while True:
    a,b=b,a+b
    if b>4000000:
        break
    if b%2==0 :
        tot=tot+b
print(tot)
        
    
