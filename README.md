# Bank API

RESTFul API dengan kasus perbankan.

Disusun oleh Ariq Hakim Ruswadi.

## Getting Started

Jalankan command berikut dalam terminal untuk install dependencies

    npm install

Sebelum menjalankan project, ubah isi dari file [.env-example](./.env-example) sesuai dengan informasi database di postgre dan port yang diinginkan, lalu ubah nama filenya menjadi **.env**

Jalankan project dengan menjalankan perintah berikut

    ``npm run dev``

## Entity

- **CLient** : Client biasa yang dapat melakukan transaksi dalam bank
- **Banker** : Orang yang melayani client
- **Transaction** : Transaksi yang dilakukan oleh client

Untuk route dan dokumentasi API terdapat dalam

    localhost:PORT/api-docs
