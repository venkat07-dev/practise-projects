def LargestPrimeFactor(n):
    pf=1
    i=2

    while i<=n/i:
        if n%i == 0:
            n/=i
        else:
            i+=1

    if pf<n:
        pf=n

    print(int(n))
    


n=int(input("Enter the No. "))
LargestPrimeFactor(n)
