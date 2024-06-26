# Logic Test Using JavaScript and MySQL

This project consists of 4 packages, each containing the code for each solved problem.

## Requirements
- JavaScript v21.7.3
- Visual Studio Code

## Installation
1. Clone this repository
   ```bash
     git clone https://github.com/snditrie/Programming-Test-SKK.git
   ```
2. Navigate to the project directory
  ```bash
  cd Programming-Test-SKK
  ```

## Results
### no.1
- command
  ```js
  let output = displayNumbers(15)
  console.log(output.join(' '))
  ```
- output
  ```js
  1 2 OK  YES  5 OK  7 YES  OK  10 11 OKYES  13 14 OK 
  ```
### no.2
- command
  ```js
  console.log("Output A: ")
  soalA(5)
  console.log("Output B: ")
  soalB(5)
  console.log("Output C: ")
  soalC(5)
  console.log("Output D: ")
  soalD(5)
  ```
- output
  ```js
  Output A: 
  1
  22
  333
  4444
  55555
  
  Output B: 
  1
  21
  321
  4321
  54321
  
  Output C: 
  1
  23
  454
  3212
  34543
  
  Output D: 
  1 10 11 20 21
  2 9 12 19 22
  3 8 13 18 23
  4 7 14 17 24
  5 6 15 16 25
  ```
### no.3
- command
  ```js
  let n = [12, 9, 13, 6, 10, 4, 7, 2]
  console.log(filteredArray)
  ```
- output
  ```js
  [ 2, 4, 7, 10, 13 ]
  ```
### no.4
using mySQL query for create database:
```sql
CREATE TABLE pelanggan (
   kode VARCHAR(11) PRIMARY KEY,
   nama VARCHAR(255),
   alamat VARCHAR(255)
);

CREATE TABLE transaksi (
   kode VARCHAR(11) PRIMARY KEY,
   tanggal DATE,
   kode_pelanggan  VARCHAR(11),
   kode_barang  VARCHAR(11),
   jumlah_barang DOUBLE(255,0),
   FOREIGN KEY (kode_pelanggan) REFERENCES pelanggan(kode),
   FOREIGN KEY (kode_barang) REFERENCES barang(kode)
);
CREATE TABLE barang (
   kode VARCHAR(11) PRIMARY KEY,
   nama VARCHAR(255),
   harga DOUBLE(255, 0)
);
```
and display all the required data according to the command.
