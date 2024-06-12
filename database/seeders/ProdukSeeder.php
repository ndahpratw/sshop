<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            $toko_id = DB::table('pabriks')->inRandomOrder()->first()->id;
            $kategori_id = DB::table('kategori_produks')->inRandomOrder()->first()->id;

            DB::table('produks')->insert([
                'id' => Str::uuid(),
                'toko_id' => $toko_id,
                'kategori_id' => $kategori_id,
                'nama_produk' => $faker->word,
                'foto_produk' => $faker->imageUrl(640, 480, 'technics', true), // Generate a random image URL
                'harga' => $faker->numberBetween(10000, 100000),
                'stok' => $faker->numberBetween(1, 100),
                'deskripsi' => $faker->paragraph,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
