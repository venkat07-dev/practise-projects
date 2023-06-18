import ibm_db

conn= ibm_db.connect("DATABASE=bludb;HOSTNAME=3883e7e4-18f5-4afe-be8c-fa31c41761d2.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=31498;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=dlj89486;PWD=nkL4MPEZElixeY3I",'','')

sql= "SELECT * FROM COURSE"
stmt= ibm_db.exec_immediate(conn,sql)
dictionary= ibm_db.fetch_assoc(stmt)
print(dictionary)