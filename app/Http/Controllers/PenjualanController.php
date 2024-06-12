<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;

class PenjualanController extends Controller
{
    public function view_product() {
        $title = 'Sherenity Shine - Our Product';
        $produk = Produk::with('brand', 'kategori')->orderBy('nama_produk')->get();
        return view('pages.user.produk', compact('title','produk'));
    }

    public function view_product_kategori($id) {
        $title = 'Sherenity Shine - Our Product';
        $produk = Produk::with('brand', 'kategori')->where('kategori_id', $id)->orderBy('nama_produk')->get();
        return view('pages.user.produk', compact('title','produk'));
    }

    public function detail_product($id) {
        $title = 'Sherenity Shine - Detail Product';
        $produk = Produk::find($id);
        return view('pages.user.produk-detail', compact('title', 'produk'));
    }

    public function payment_product($id) {
        $title = 'Sherenity Shine - Payment Product';
        $produk = Produk::find($id);
        return view('pages.user.produk-payment', compact('title', 'produk'));
    }
}
