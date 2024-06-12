<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Pabrik;
use App\Models\KategoriProduk;
use App\Models\Produk;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index() {
        $title = 'Dashboard';
        $jumlah_brand = Pabrik::all()->count();
        $admin = User::where('role', 'admin')->count();

        // informasi kategori
        $kategori = KategoriProduk::select('kategori_produks.id', 'kategori_produks.nama_kategori', DB::raw('COUNT(produks.id) as jumlah_produk'))
        ->leftJoin('produks', 'kategori_produks.id', '=', 'produks.kategori_id')
        ->groupBy('kategori_produks.id', 'kategori_produks.nama_kategori')
        ->orderBy('kategori_produks.id')
        ->get();

        $data_kategori = [];
        $jumlah_data = [];

        foreach ($kategori as $data) {
            $data_kategori[] = $data->nama_kategori;
            $jumlah_data[] = $data->jumlah_produk;
        }

        // informasi brand
        $brand = Pabrik::select('pabriks.id', 'pabriks.nama_pabrik', DB::raw('COUNT(produks.id) as jumlah_produk'))
        ->leftJoin('produks', 'pabriks.id', '=', 'produks.toko_id')
        ->groupBy('pabriks.id', 'pabriks.nama_pabrik')
        ->orderBy('pabriks.id')
        ->get();

        // dd($brand);

        $data_brand = [];
        $jumlah_data_brand = [];

        foreach ($brand as $data) {
            $data_brand[] = $data->nama_pabrik;
            $jumlah_data_brand[] = $data->jumlah_produk;
        }

        return view('pages.admin.dashboard', compact(
            'title', 'jumlah_brand', 'admin',
            'data_kategori', 'jumlah_data',
            'data_brand', 'jumlah_data_brand',
        ));
    }
}
