-- 1. WHERE

SELECT * FROM tb_book WHERE book_id = ?
-- (Optional) : 
ALTER TABLE tb_book;
UPDATE tb_book SET book_price = 150, book_stock, = 50 WHERE book_name = 'แดนดิไลออน';

-- 2. JOIN
SELECT c.customer_firstname, c.customer_lastname, c.customer_phone, c.customer_mail, a.address_id, a.address_province, a.address_district, a.address_subdistrict, a.address_zipcode FROM `tb_customer` AS c JOIN `tb_address` AS a WHERE c.customer_id = 2;

-- 3. JOIN (more than 2)
SELECT order_id `อันดับออเดอร์`, order_customer_id `ออเดอร์ของลูกค้า`, order_price `ยอดรวมออเดอร์`, order_quantity `จำนวนในออเดอร์`, order_address_id `ที่อยู่ของออเดอร์`, order_items_book_id `รายการหนังสือที่ต้องส่ง`, invoice_id `บิลเลขที่`, invoice_ems `เลข ems`, invoice_address `อันดับที่อยู่ที่ต้องจัดส่ง` FROM tb_order
LEFT JOIN tb_order_items ON tb_order.order_id = tb_order_items.order_items_order_id
LEFT JOIN tb_invoice ON tb_order.order_id = tb_invoice.invoice_order_id
WHERE tb_order.order_customer_id = 2;

-- 4. GROUP FUNCTION
SELECT category_name, MIN(book_price) AS min_price, MAX(book_price) AS max_price
FROM tb_book
JOIN tb_category ON tb_book.category_id = tb_category.category_id
GROUP BY category_name;

-- 5. SUBQUERY
SELECT tb_book.book_name, tb_book.book_author, tb_book.book_createAt FROM tb_book
INNER JOIN tb_category ON tb_book.category_id = tb_category.category_id
WHERE tb_category.category_name = "Japanese Novel" AND tb_book.book_stock > 40 AND tb_book.book_id 
IN (SELECT tb_book.book_id FROM tb_book
INNER JOIN tb_category ON tb_book.category_id = tb_category.category_id
WHERE tb_category.category_name = "Japanese Novel" AND tb_book.book_price > 300);

-- 6. GROUP FUNCTION
SELECT tb_category.category_name, SUM(tb_review.review_comment) as total_review, SUM(tb_book.book_stock) as totalStockperbook , SUM(tb_book.book_price * tb_book.book_stock) as total_price
FROM tb_review
INNER JOIN tb_book ON tb_review.review_book_id = tb_book.book_id
INNER JOIN tb_category ON tb_book.category_id = tb_category.category_id
GROUP BY tb_category.category_name;

-- 7. Everyone
SELECT tb_customer.customer_id, tb_customer.customer_firstname, tb_customer.customer_lastname, tb_order.order_id, tb_order.order_createAt, tb_order.order_price, tb_order.order_status, tb_customer.customer_phone FROM tb_customer
LEFT JOIN tb_order ON tb_customer.customer_id = tb_order.order_customer_id
WHERE tb_customer.customer_phone = 0982585534;