USE [StudentDetail]
GO
/****** Object:  StoredProcedure [dbo].[UpdateStudentDetail]    Script Date: 04-Feb-21 10:18:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[UpdateStudentDetail] @RegisterNO bigint, @Name varchar(50),@Age int ,@DateOfBirth date,@Class varchar(50),@MailId varchar(max),@MobileNO bigint,@HOD varchar(50)
AS
BEGIN
UPDATE StudentDetails
SET Name=@Name,Age=@Age,DateOfBirth=@DateOfBirth,Class=@Class,MailId=@MailId,MobileNO=@MobileNO,HOD=@HOD
WHERE RegisterNO = @RegisterNO
END