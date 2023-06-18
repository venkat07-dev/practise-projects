CREATE PROCEDURE spDETAILS @RegisterNO bigint, @Name varchar(50) ,@Age int, @DateOfBirth date,@Class varchar(10),@MailId varchar(max),@HOD varchar(50),@MobileNO bigint
AS
BEGIN
INSERT INTO StudentDetails (RegisterNO,Name,Age,DateOfBirth,Class,MailID,MobileNO,HOD)
VALUES( @RegisterNO,@Name,@Age,@DateOfBirth,@Class,@MailId,@MobileNO,@HOD)

END