# This document instructs how to create the refrigerator_app and populate mock data for testing.
# 1. Create the refrigerator-app in PostSQL using the following command:
# 2. Open terminal and enter psql <enter>
# 3. At prompt enter CREATE DATABASE refrigerator_app;
# 4. Open PostgreSQL, select refrigerator_app and click start
# 5. Open Postico, click refrigerator_app database and open SQL QUERY
# 6. Enter copy/paste the following code to create a local database connection to refrigerator_app.

 
INSERT INTO USERS
(
USER_ID, 
EMAIL, 
PASSWORD, 
FULL_NAME,
PHONE, 
CREATED_AT, 
MODIFIED_AT, 
DELETED,
AUTH0_ID, 
EXTRA_FIELD1, 
EXTRA_FIELD2, 
EXTRA_FIELD3
)
VALUES (2, 'KEL@GMAIL.COM', 'password1','kevin lester','4046976771','07-11-2020','07-11-2020',TRUE, 02, 'null','null','null');

INSERT INTO USERS
(
USER_ID, 
EMAIL, 
PASSWORD, 
FULL_NAME,
PHONE, 
CREATED_AT, 
MODIFIED_AT, 
DELETED,
AUTH0_ID, 
EXTRA_FIELD1, 
EXTRA_FIELD2, 
EXTRA_FIELD3
)
VALUES (3, 'TEST@GMAIL.COM', 'test','kelvin les','4046976772','07-11-2020','07-11-2020',TRUE, 03, 'null','null','null');

INSERT INTO USERS
(
USER_ID, 
EMAIL, 
PASSWORD, 
FULL_NAME,
PHONE, 
CREATED_AT, 
MODIFIED_AT, 
DELETED,
AUTH0_ID, 
EXTRA_FIELD1, 
EXTRA_FIELD2, 
EXTRA_FIELD3
)
VALUES (4, 'refrig@GMAIL.COM', 'refrig','refrig ice','4046976774','07-11-2020','07-11-2020',TRUE, 04, 'null','null','null');

INSERT INTO USERS
(
USER_ID, 
EMAIL, 
PASSWORD, 
FULL_NAME,
PHONE, 
CREATED_AT, 
MODIFIED_AT, 
DELETED,
AUTH0_ID, 
EXTRA_FIELD1, 
EXTRA_FIELD2, 
EXTRA_FIELD3
)
VALUES (5, 'KELLESDEVGUY5@GMAIL.COM', 'password5','John Doe','4046009090','07-11-2020','07-11-2020',TRUE, 05, 'null','null','null');

INSERT INTO USERS
(
USER_ID, 
EMAIL, 
PASSWORD, 
FULL_NAME,
PHONE, 
CREATED_AT, 
MODIFIED_AT, 
DELETED,
AUTH0_ID, 
EXTRA_FIELD1, 
EXTRA_FIELD2, 
EXTRA_FIELD3
)
VALUES (6, 'digital@GMAIL.COM', 'digital','digital crafts','4045555555','07-11-2020','07-11-2020',TRUE, 06, 'null','null','null');


INSERT INTO CATEGORIES (category_id,category_name, extra_field1, extra_field2)
VALUES (1,'Meat', 'test', 'test');
INSERT INTO CATEGORIES (category_id,category_name, extra_field1, extra_field2)
VALUES (2,'Veggies', 'test', 'test');
INSERT INTO CATEGORIES (category_id,category_name, extra_field1, extra_field2)
VALUES (3,'Dairy', 'test', 'test');
INSERT INTO CATEGORIES (category_id,category_name, extra_field1, extra_field2)
VALUES (4,'Drinks', 'test', 'test');

INSERT INTO USER_PRODUCTS (product_id, user_id, product_qty, product_weight, 
created_at, modified_at, extra_field1, extra_field2, extra_field3, extra_field4)
VALUES (123, 1, 1,56,'07-11-2020','07-11-2020','test','test','test','test');
INSERT INTO USER_PRODUCTS (product_id, user_id, product_qty, product_weight, 
created_at, modified_at, extra_field1, extra_field2, extra_field3, extra_field4)
VALUES (1245, 2, 5,56,'07-11-2020','07-11-2020','test','test','test','test');
INSERT INTO USER_PRODUCTS (product_id, user_id, product_qty, product_weight, 
created_at, modified_at, extra_field1, extra_field2, extra_field3, extra_field4)
VALUES (1213, 1, 6,56,'07-11-2020','07-11-2020','test','test','test','test');
INSERT INTO USER_PRODUCTS (product_id, user_id, product_qty, product_weight, 
created_at, modified_at, extra_field1, extra_field2, extra_field3, extra_field4)
VALUES (1123, 1, 2,56,'07-11-2020','07-11-2020','test','test','test','test');



