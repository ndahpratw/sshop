<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert([
            [
                'alamat' => 'Jl. Mayjend Sungkono No.5 Bangkalan',
                'alamat_rujukan' => 'https://www.google.com/maps/place/SDN+Pejagan+1+Bangkalan/@-7.0243878,112.7518083,3a,75y,161.89h,90t/data=!3m7!1e1!3m5!1sGkryWNpGW3v9PZrVGY0VcQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DGkryWNpGW3v9PZrVGY0VcQ%26cb_client%3Dsearch.gws-prod.gps%26w%3D211%26h%3D120%26yaw%3D161.89452%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m14!1m7!3m6!1s0x2dd805878fe1ff77:0xaa1d3b971679bb77!2sSDN+Pejagan+1+Bangkalan!8m2!3d-7.02451!4d112.75182!16s%2Fg%2F1hm5gqtdl!3m5!1s0x2dd805878fe1ff77:0xaa1d3b971679bb77!8m2!3d-7.02451!4d112.75182!16s%2Fg%2F1hm5gqtdl?entry=ttu',
                'iframe' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.935833371216!2d112.75086777875151!3d-7.024367697594174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd805878fe1ff77%3A0xaa1d3b971679bb77!2sSDN%20Pejagan%201%20Bangkalan!5e0!3m2!1sid!2sid!4v1705469698846!5m2!1sid!2sid',
                'telepon' => '#',
                'email' => '#',
                'instagram' => 'https://www.instagram.com/#',
                'facebook' => 'https://facebook.com/#',
                'youtube' => 'https://www.youtube.com/#',
            ]
        ]);
    }
}
