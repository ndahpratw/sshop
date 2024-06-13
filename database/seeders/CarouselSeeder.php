<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class CarouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $carousels = [];
        
        
        for ($i = 0; $i < 5; $i++) {

            $carousels[] = [
                'carousel_image' => 'circle-logo.png',
                'title' => $faker->name,
                'deskripsi' => $faker->address,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('carousels')->insert($carousels);
    }
}
