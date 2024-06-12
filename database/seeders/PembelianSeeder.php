<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PembelianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            $harga = rand(10000, 100000);
            $jumlah = rand(1, 5);
            $total = $harga * $jumlah;

            $user = DB::table('users')->inRandomOrder()->first()->id;
            $produk = DB::table('produks')->inRandomOrder()->first()->id;

            DB::table('pembelians')->insert([
                'id' => Str::uuid(),
                'user_id' => $user,
                'produk_id' => $produk,
                'harga' => $harga,
                'jumlah' => $jumlah,
                'total' => $total,
                'alamat' => 'Alamat contoh',
                'pesan' => 'Pesan contoh',
                'metode_pembayaran' => 'transfer',
                'status_pembayaran' => 'belum bayar',
                'status_pesanan' => 'menunggu pembayaran',
                'bukti_pembayaran' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
