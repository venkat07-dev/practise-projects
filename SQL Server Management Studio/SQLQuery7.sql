CREATE PROCEDURE AddStudentDetail @RegisterNO bigint, @Name varchar(20)
--/,@Age int ,@DateOfBirth date,@Class varchar(10),@MailId varchar(max)

AS
BEGIN
INSERT INTO StudentDetails (RegisterNO,Name)
VALUES(@RegisterNO,@Name);

END