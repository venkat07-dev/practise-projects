USE [StudentDetail]
GO
/****** Object:  StoredProcedure [dbo].[AddStudentDetail]    Script Date: 10-Jan-21 11:37:18 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[AddStudentDetail] @RegisterNO bigint, @Name varchar(20),@Age int ,@DateOfBirth date,@Class varchar(10),@MailId varchar(max),@MobileNO bigint,@HOD varchar(10) 


AS
BEGIN
INSERT INTO StudentDetails (RegisterNO,Name,Age,DateOfBirth,Class,MailId,MobileNO,HOD)
VALUES(@RegisterNO,@Name,@Age,@DateOfBirth,@Class,@MailId,@MobileNO,@HOD);

END