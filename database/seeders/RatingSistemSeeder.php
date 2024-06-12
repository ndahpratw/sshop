<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Support\Str;
use App\Models\RatingSistem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RatingSistemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $ratings = [];
        
        
        for ($i = 0; $i < 5; $i++) {

            $user = DB::table('users')->inRandomOrder()->first()->id;

            $ratings[] = [
                'id' => Str::uuid(),
                'user_id' => $user,
                'rating' => rand(1,5),
                'ulasan' => $faker->address,
            ];
        }

        DB::table('rating_sistems')->insert($ratings);
    }
}
