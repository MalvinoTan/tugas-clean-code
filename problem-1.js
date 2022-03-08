/* 
SOAL
Berapa banyak kekurangan dalam penulisan kode tersebut?

JAWABAN
Ada 4

SOAL
Bagian mana saja terjadi kekurangan tersebut?
Tuliskan alasan dari tiap kekurangan tersebut!

JAWABAN
1. Penamaan Class user dan Class userservice
   Karena penamaan class disarankan menggunakan PascalCase
   yaitu semua huruf paling depan pada setiap kata dibuat kapital
   agar lebih jelas dan konsisten.
2. Deklarasi properti pada Class user dan Class userservice
   Karena seharusnya deklarasi properti awal pada javascript menggunakan
   constructor diikuti parameter yang diinginkan.
3. Inisialisasi properti pada Class user dan Class userservice
   Karena disarankan menggunakan keyword "this" pada javascript untuk menunjukkan
   bahwa itu merupakan properti dari class tersebut serta inisialisasikan nilai
   awal/default pada tiap properti.
4. Penamaan variabel dan method
   Karena penamaan variabel dan method disarankan menggunakan camelCase 
   yaitu semua huruf paling depan pada setiap kata dibuat kapital
   kecuali kata pertama agar lebih jelas dan konsisten.
*/


// Kode yang sudah diperbaiki
class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

class UserService {
    constructor(users) {
        this.users = users;
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(userId) {
        return this.users.filter(userId);
    }
}