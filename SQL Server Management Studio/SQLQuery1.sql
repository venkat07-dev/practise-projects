USE [StudentDetail]
GO
/****** Object:  StoredProcedure [dbo].[UpdateStudentDetail]    Script Date: 21-Jan-21 10:40:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[UpdateStudentDetail] @RegisterNO bigint, @Name varchar(20),@Age int ,@DateOfBirth date,@Class varchar(10),@MailId varchar(max),@MobileNO bigint,@HOD varchar(10)
AS
BEGIN
UPDATE StudentDetails
SET Name='@Name',Age='@Age',DateOfBirth='@DateOfBirth',Class='@Class',MailId='@MailId',MobileNO='@MobileNO',HOD='@HOD'
WHERE RegisterNO = '@RegisterNO'
END