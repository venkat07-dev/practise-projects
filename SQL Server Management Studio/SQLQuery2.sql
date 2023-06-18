CREATE PROCEDURE UpdateStudentDetail  @Name varchar(20),@Age int ,@DateOfBirth date,@Class varchar(10),@MailId varchar(max),@MobileNO bigint,@HOD varchar(10)
AS
BEGIN
UPDATE StudentDetails
SET Name='@Name',Age='@Age',DateOfBirth='@DateOfBirth',Class='@Class',MailId='@MailId',MobileNO='@MobileNO',HOD='@HOD'
WHERE RegisterNO = '@RegisterNO'
END