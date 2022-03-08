class Kendaraan {
    constructor() {
        this.totalRoda = 0;
        this.kecepatanPerJam = 0;
    }
}

class Mobil extends Kendaraan {
    constructor() {
        super();
    }

    melaju() {
        this.tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru) {
        this.kecepatanPerJam += kecepatanBaru;
    }
}

mobilCepat = new Mobil();
mobilCepat.melaju();
mobilCepat.melaju();
mobilCepat.melaju();

mobilLamban = new Mobil();
mobilLamban.melaju();