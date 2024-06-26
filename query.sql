/*A*/
SELECT kode, nama, harga
FROM barang
WHERE harga > 10000
ORDER BY harga ASC;

/*B*/
SELECT kode, nama, alamat
FROM pelanggan
WHERE nama LIKE '%g%' AND alamat = 'bandung';

/*C*/
SELECT
    t.kode AS kode,
    t.tanggal AS tanggal,
    p.nama AS nama_pelanggan,
    b.nama AS nama_barang,
    t.jumlah_barang AS jumlah,
    b.harga AS harga_satuan,
    t.jumlah_barang * b.harga AS total
FROM
    transaksi t
        JOIN
    pelanggan p ON t.kode_pelanggan = p.kode
        JOIN
    barang b ON t.kode_barang = b.kode
ORDER BY
    p.nama ASC;



/*D*/
SELECT
    p.nama AS nama_pelanggan,
    SUM(t.jumlah_barang) AS jumlah,
    SUM(t.jumlah_barang * b.harga) AS total_harga
FROM
    transaksi t
        JOIN
    pelanggan p ON t.kode_pelanggan = p.kode
        JOIN
    barang b ON t.kode_barang = b.kode
GROUP BY
    p.nama;